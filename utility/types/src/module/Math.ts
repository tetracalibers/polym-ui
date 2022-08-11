import { Num } from './Number'

export namespace Math {
  type _Check<T extends string | number | bigint> = T extends number | bigint
    ? true
    : T extends `${infer L}${infer R}`
    ? L extends '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9'
      ? _Check<R>
      : false
    : true

  type _STA<
    T extends string,
    RR extends string[] = []
  > = T extends `${infer L}${infer R}` ? _STA<R, [...RR, L]> : RR

  type _ATS<T extends unknown[]> = T extends [infer L, ...infer R]
    ? L extends string
      ? `${L}${_ATS<R>}`
      : ''
    : ''

  export type PlusOne<
    A extends string,
    B extends string,
    AA extends unknown[] = [],
    BA extends unknown[] = []
  > = `${AA['length']}` extends A
    ? `${BA['length']}` extends B
      ? `${[...AA, ...BA]['length'] & number}`
      : PlusOne<A, B, AA, [...BA, unknown]>
    : PlusOne<A, B, [...AA, unknown], BA>

  type _PlusHelper<A, B, F extends boolean = false> = PlusOne<
    A extends string ? A : '0',
    PlusOne<B extends string ? B : '0', F extends true ? '1' : '0'>
  > extends `${infer _1}${infer _2}`
    ? _2 extends ''
      ? [false, _1]
      : [true, _2]
    : [false, '0']

  export type Plus<
    A extends unknown[] = [],
    B extends unknown[] = [],
    R extends string[] = [],
    F extends boolean = false
  > = A extends [...infer LA, infer RA]
    ? B extends [...infer LB, infer RB]
      ? Plus<
          LA,
          LB,
          [_PlusHelper<RA, RB, F>[1], ...R],
          _PlusHelper<RA, RB, F>[0]
        >
      : F extends true
      ? Plus<
          LA,
          [],
          [_PlusHelper<RA, '1', false>[1], ...R],
          _PlusHelper<RA, '1', false>[0]
        >
      : [...A, ...R]
    : B extends [...infer LB, infer RB]
    ? F extends true
      ? Plus<
          [],
          LB,
          [_PlusHelper<'1', RB, false>[1], ...R],
          _PlusHelper<'1', RB, false>[0]
        >
      : [...B, ...R]
    : F extends true
    ? ['1', ...R]
    : R

  type _Helper<A extends string, B extends string> = _ATS<
    Plus<_STA<A>, _STA<B>>
  >

  export type Sum<
    A extends string | number | bigint,
    B extends string | number | bigint
  > = _Check<A> extends true
    ? _Check<B> extends true
      ? _Helper<Num.To.String<A>, Num.To.String<B>>
      : never
    : never
}
