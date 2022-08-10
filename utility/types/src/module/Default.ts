import { A } from './Alias'
import { C } from './Collection'
import { Union } from './Union'

export namespace Default {
  export type Set<D, T = D> = T

  export type TypeAndDefault<T, D> = {
    type: T
    default: D
  }

  export type PickByDefaultType<
    O extends { [_K: string]: TypeAndDefault<unknown, unknown> },
    U
  > = { [k in keyof O as O[k]['default'] extends U ? k : never]: O[k] }

  export type OmitByDefaultType<
    O extends { [_K: string]: TypeAndDefault<unknown, unknown> },
    U
  > = { [k in keyof O as O[k]['default'] extends U ? never : k]: O[k] }

  export type DefaultPropsSetup<
    D extends { [k in A.ObjIndex]: unknown },
    T extends Object,
    R extends unknown,
    K = Union.To.Tuple<keyof D>
  > = C.Is.Tuple<K> extends true
    ? C.Is.NotEmpty<K[]> extends true
      ? {
          [DKey in keyof K[]]: D[DKey]
        } extends infer DR
        ? {
            [TKey in Exclude<keyof T, keyof DR>]: T[TKey]
          } extends infer TR
          ? TR & DR extends infer I
            ? DefaultPropsSetup<
                D,
                T,
                R extends A.EmptyType ? I : R | I,
                C.Shift<K[]>
              >
            : R extends A.EmptyType
            ? never
            : R
          : never
        : never
      : R extends A.EmptyType
      ? never
      : R
    : never

  export type Def<
    O extends { [_K: string]: TypeAndDefault<unknown, unknown> }
  > = {
    [K in keyof PickByDefaultType<O, undefined>]?: O[K]['type']
  } extends infer OPTIONAL
    ? {
        [K in Exclude<keyof O, keyof OPTIONAL>]?: O[K]['type']
      } extends infer REQUIRE_TYPE
      ? {
          readonly [K in Exclude<keyof O, keyof OPTIONAL>]: <
            T extends O[K]['type'] = O[K]['default']
          >() => T
        } extends infer REQUIRE_DEFAULT
        ? OPTIONAL & REQUIRE_TYPE & REQUIRE_DEFAULT
        : never
      : never
    : never
}
