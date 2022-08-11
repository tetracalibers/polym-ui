import {
  CssStyle,
  Alias,
  Union,
  Object,
  Collection as C,
  Predicate as P,
} from '@react-polyhex-ui-dev/utility-types'
import { ReactNode } from 'react'
import _ from 'lodash'
import { pipe } from 'fp-ts/function'

class PropWithDefault<T> {
  private _default: T

  constructor(defauV: T) {
    this._default = defauV
  }

  get default(): T {
    return this._default
  }
}

//type GetClassT<C> = C extends C<infer T> ? T : unknown;

const setDefault = <T>(defaultV: T) => {
  const d = new PropWithDefault<T>(defaultV).default
  return d
}

const setNullable = <T>(defaultV: T | Alias.EmptyType = undefined) =>
  setDefault<T | Alias.EmptyType>(defaultV)

type Split<
  S extends string,
  SEP extends string,
  Flag = false
> = string extends S
  ? string[]
  : S extends ''
  ? Flag extends false
    ? SEP extends ''
      ? []
      : ['']
    : []
  : S extends `${infer Before}${SEP}${infer After}`
  ? [Before, ...Split<After, SEP, true>]
  : [S]

const flipKV = (obj: Record<Alias.ObjIndex, Alias.ObjIndex>) => {
  return Object.fromEntries(
    Object.entries(obj).map((entry: [Alias.ObjIndex, Alias.ObjIndex]) => {
      const [key, value] = entry
      return [value, key]
    })
  )
}

// your answers
type Enum<
  T extends readonly string[],
  N extends boolean = false,
  R extends object = {}
> = T extends readonly [
  ...infer Rest extends string[],
  infer Last extends string
]
  ? Enum<
      Rest,
      N,
      {
        readonly [key in keyof R | Last as key extends keyof R
          ? key
          : Capitalize<Last>]: key extends keyof R
          ? R[key]
          : N extends false
          ? Last
          : Rest['length']
      }
    >
  : R

type ObjectEntries<T, U = keyof T> = U extends keyof T
  ? [U, T[U] extends infer Rest | undefined ? Rest : T[U]]
  : never

type Peano<
  TLength extends number = 40,
  TList extends any[] = []
> = TList['length'] extends TLength
  ? TLength
  : TList['length'] | Peano<TLength, [[], ...TList]>

type PeanoToStr = {
  [K in Peano]: `${K}`
}

type PeanoFromStr = {
  [Property in keyof PeanoToStr as `${Property}`]: Property
}

type ToNumber<S extends string> = S extends keyof PeanoFromStr
  ? PeanoFromStr[S]
  : never

type Check<T extends string | number | bigint> = T extends number | bigint
  ? true
  : T extends `${infer L}${infer R}`
  ? L extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
    ? Check<R>
    : false
  : true

type ToString<T extends string | number | bigint> = T extends `0${infer L}`
  ? ToString<L>
  : `${T}`

type STA<
  T extends string,
  RR extends string[] = []
> = T extends `${infer L}${infer R}` ? STA<R, [...RR, L]> : RR

type ATS<T extends unknown[]> = T extends [infer L, ...infer R]
  ? L extends string
    ? `${L}${ATS<R>}`
    : ''
  : ''

type PlusOne<
  A extends string,
  B extends string,
  AA extends unknown[] = [],
  BA extends unknown[] = []
> = `${AA['length']}` extends A
  ? `${BA['length']}` extends B
    ? `${[...AA, ...BA]['length'] & number}`
    : PlusOne<A, B, AA, [...BA, unknown]>
  : PlusOne<A, B, [...AA, unknown], BA>

type PlusHelper<A, B, F extends boolean = false> = PlusOne<
  A extends string ? A : '0',
  PlusOne<B extends string ? B : '0', F extends true ? '1' : '0'>
> extends `${infer _1}${infer _2}`
  ? _2 extends ''
    ? [false, _1]
    : [true, _2]
  : [false, '0']

type Plus<
  A extends unknown[] = [],
  B extends unknown[] = [],
  R extends string[] = [],
  F extends boolean = false
> = A extends [...infer LA, infer RA]
  ? B extends [...infer LB, infer RB]
    ? Plus<LA, LB, [PlusHelper<RA, RB, F>[1], ...R], PlusHelper<RA, RB, F>[0]>
    : F extends true
    ? Plus<
        LA,
        [],
        [PlusHelper<RA, '1', false>[1], ...R],
        PlusHelper<RA, '1', false>[0]
      >
    : [...A, ...R]
  : B extends [...infer LB, infer RB]
  ? F extends true
    ? Plus<
        [],
        LB,
        [PlusHelper<'1', RB, false>[1], ...R],
        PlusHelper<'1', RB, false>[0]
      >
    : [...B, ...R]
  : F extends true
  ? ['1', ...R]
  : R

type Helper<A extends string, B extends string> = ATS<Plus<STA<A>, STA<B>>>

type Sum<
  A extends string | number | bigint,
  B extends string | number | bigint
> = Check<A> extends true
  ? Check<B> extends true
    ? Helper<ToString<A>, ToString<B>>
    : never
  : never

const defineProps = function <O, K extends keyof O>(options: O) {
  type OptionKey = K
  type OptionValue<k extends OptionKey> = O[k]
  type OptionRecord = {
    [k in OptionKey]: OptionValue<k>
  }
  type OptionArray = ObjectEntries<OptionRecord>
  type OptionLength = C.Length<OptionArray>
  type OptionIdxs = C.AtLeast<OptionLength, number>
  type OptionKeysTuple = Union.To.Tuple<OptionKey>
  type AtOptionKey<idx extends number> = [...K[]][idx]

  type ReturnRecord = {
    [k in OptionKey]: {
      type: OptionValue<k>
      default: OptionValue<k> | Alias.EmptyType
    }
  }

  const optionLength = Object.keys(options).length
  const idxs = [...new Array(optionLength)].map((_, i) => i) as OptionIdxs

  const entries = Object.entries(options)

  const _iterUnit = <idx extends number = 0>(
    building: ReturnRecord = {} as ReturnRecord,
    restEntries = entries
  ): ReturnRecord => {
    const [entry, ...nextRest] = restEntries
    type NowKey = AtOptionKey<idx>
    const key = entry[0] as NowKey
    const value = entry[1] as OptionValue<NowKey>
    const isValid = value instanceof PropWithDefault
    building[key as OptionKey] = {
      type: value,
      default: isValid ? value.default : undefined,
    }
    if (nextRest.length > 0) {
      return _iterUnit<ToNumber<Sum<idx, 1>>>(building, nextRest)
    }
    return building
  }
  const optRecord = _iterUnit()
  console.log('🚀 ~ file: index.ts ~ line 207 ~ optRecord', optRecord)
}

const options = {
  /*
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   STYLING                                                                   │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  /**
   * @default 1.7rem
   * @desc Box間の間隔（margin-topの値）
   */
  space: setDefault<CssStyle.Prop.Value.Space>('1.7rem'),

  /**
   * @default false
   * @desc 入れ子要素に対しても再帰的にmargin挿入するか
   */
  recursive: setDefault<boolean>(false),

  /**
   * @default undefined
   * @desc これより下のボックスをボックス下部にまとめるために隙間を開けるbreak point
   */
  separateFrom: setNullable<number>(undefined),

  /*
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │   ACCESSIBILITY                                                             │
  └─────────────────────────────────────────────────────────────────────────────┘
 */
  /**
   * @default false
   * @desc ブラウザにリストとして解釈させるか
   */
  isList: setDefault<boolean>(false),
} as const

type OptionKey = keyof typeof options

defineProps<typeof options, OptionKey>(options)
