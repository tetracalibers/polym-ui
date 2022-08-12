import { C } from './Collection'

export namespace Union {
  export namespace To {
    export type IntersectionFn<TUnion> = (
      TUnion extends TUnion ? (union: () => TUnion) => void : never
    ) extends (intersection: infer Intersection) => void
      ? Intersection
      : never
  }

  export type Last<TUnion> = To.IntersectionFn<TUnion> extends () => infer Last
    ? Last
    : never

  export namespace To {
    export type Tuple<
      TUnion,
      TResult extends Array<unknown> = []
    > = TUnion[] extends never[]
      ? TResult
      : Tuple<Exclude<TUnion, Last<TUnion>>, [...TResult, Last<TUnion>]>
  }

  export type Without<T extends unknown[], U> = T extends [infer H, ...infer R]
    ? H extends T[number] & (U extends unknown[] ? U[number] : U)
      ? Without<R, U>
      : [H, ...Without<R, U>]
    : []

  export namespace Ex {
    export type UnionWithoutUndefined<U> = C.Tuple.To.Union<
      Without<To.Tuple<U>, undefined>
    >
  }
}
