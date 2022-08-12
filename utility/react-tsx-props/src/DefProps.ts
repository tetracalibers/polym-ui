import {
  Alias,
  String as Str,
  Math,
  Object as Obj,
  Union,
  Predicate as P,
} from '@react-polyhex-ui-dev/utility-types'

export class PropWithDefault<T> {
  private _default: T

  constructor(defauV: T) {
    this._default = defauV
  }

  get default(): T {
    return this._default
  }
}

type OptionValueDictionary<T = unknown> = {
  instance: PropWithDefault<T>
  default: T
}

type OptionRecord<T = unknown> = {
  [k: string]: OptionValueDictionary<T>
}

type FromStrInUnion<U, S extends Alias.Primitive> = P.Equal<
  Extract<U, `${S}`>,
  never
> extends false
  ? S | Exclude<U, `${S}`>
  : U

export type getPropTypes<O> = Partial<{
  readonly [k in keyof O]: O[k] extends {
    instance: PropWithDefault<infer T>
    default: infer T
  }
    ? T
    : never
}>

export const setDefault = <T>(defaultV: T) => {
  const ins = new PropWithDefault<T>(defaultV)
  return {
    instance: ins,
    default: ins.default,
  }
}

export const setNullable = <T>(defaultV: T | Alias.EmptyType = undefined) => {
  return setDefault<T | Alias.EmptyType>(defaultV)
}

export const getDefaultProps = (options: OptionRecord<Alias.Primitive>) => {
  const entries = Object.entries(options)

  type Options = typeof options

  type OptionKeyU = keyof Options

  type FlipByDefault = {
    [K in OptionKeyU as `${Options[K]['default']}`]: K
  }

  type OptionValueF = FlipByDefault

  type UnionTypeMap = Obj.Flip<OptionValueF>

  type OptionTypeMap = {
    [K in OptionKeyU]: UnionTypeMap[K] extends infer T
      ? FromStrInUnion<T, false> extends infer T2
        ? FromStrInUnion<T2, true> extends infer T3
          ? FromStrInUnion<T3, undefined> extends infer T4
            ? FromStrInUnion<T4, null> extends infer T5
              ? FromStrInUnion<T5, number> extends infer T6
                ? FromStrInUnion<T6, bigint>
                : never
              : never
            : never
          : never
        : never
      : never
  }

  type OptionKey = OptionKeyU
  type OptionValue<k extends OptionKey> = OptionTypeMap[k]
  type AtOptionKey<idx extends number> = Union.To.Tuple<OptionKey>[idx]

  type ReturnRecord = {
    [k in OptionKey]: {
      default: OptionValue<k>
    }
  }

  const _iterUnit = <idx extends number = 0>(
    building: ReturnRecord = {} as ReturnRecord,
    restEntries = entries
  ): ReturnRecord => {
    const [entry, ...nextRest] = restEntries
    type NowKey = AtOptionKey<idx>
    const key = entry[0] as NowKey
    const value = entry[1] as {
      instance: PropWithDefault<OptionValue<NowKey>>
      default: OptionValue<NowKey>
    }

    const builded = {
      ...building,
      [key]: value.default,
    } as typeof building & {
      NowKey: unknown
    }

    if (nextRest.length > 0) {
      return _iterUnit<Str.To.Number<Math.Sum<idx, 1>>>(builded, nextRest)
    }
    return builded
  }

  return _iterUnit()
}
