export namespace C {
  export namespace Is {
    export type Tuple<T> = [T] extends [never]
      ? false
      : T extends readonly [...unknown[]]
      ? T extends readonly [infer _A, ...infer _O]
        ? true
        : T['length'] extends 0
        ? true
        : false
      : false

    export type NotEmpty<A extends unknown[]> = A extends [infer _, infer __]
      ? true
      : false
  }

  export type FilterOut<T extends unknown[], F> = T extends [
    infer First,
    ...infer Rest
  ]
    ? First extends F
      ? FilterOut<Rest, F>
      : [First, ...FilterOut<Rest, F>]
    : []

  export type Push<T, U> = T extends unknown[] ? [...T, U] : never

  export type Append<Elm, T extends unknown[]> = ((
    arg: Elm,
    ...rest: T
  ) => void) extends (...args: infer T2) => void
    ? T2
    : never

  type _AtLeastIterUnit<Num, Elm, T extends unknown[], C extends unknown[]> = {
    0: T
    1: _AtLeastIterUnit<Num, Elm, Append<Elm, T>, Append<unknown, C>>
  }[C extends { length: Num } ? 0 : 1]

  export type AtLeast<N extends number, T> = _AtLeastIterUnit<N, T, T[], []>

  export type Shift<T extends unknown[]> = T extends [infer _L, ...infer R]
    ? [...R]
    : never

  export type Flatten<T> = T extends [infer F, ...infer R]
    ? F extends unknown[]
      ? [...Flatten<F>, ...Flatten<R>]
      : [F, ...Flatten<R>]
    : T

  export type Length<T extends readonly unknown[]> = T['length']

  export namespace Array {
    export namespace To {
      export type Union<T extends unknown[]> = T extends [
        infer Head,
        ...infer Rest
      ]
        ? Is.NotEmpty<Rest> extends true
          ? Head | Union<Rest>
          : Head
        : never
    }
  }

  export namespace Tuple {
    export namespace To {
      export type Union<Tuple extends unknown[]> = Tuple[number]
    }
  }
}
