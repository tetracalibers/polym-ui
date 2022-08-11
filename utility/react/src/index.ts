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

const setDefault = <T>(defaultV: T) => {
  const d = new PropWithDefault<T>(defaultV).default
  return d
}

const setNullable = <T>(defaultV: T | Alias.EmptyType = undefined) =>
  setDefault<T | Alias.EmptyType>(defaultV)

const flipKV = (obj: Record<Alias.ObjIndex, Alias.ObjIndex>) => {
  return Object.fromEntries(
    Object.entries(obj).map((entry: [Alias.ObjIndex, Alias.ObjIndex]) => {
      const [key, value] = entry
      return [value, key]
    })
  )
}

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
