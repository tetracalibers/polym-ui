import { C } from './Collection'
import { P } from './Predicate'
import { Union } from './Union'

export namespace Object {
  export type KeyPaths<T extends object> = T extends Record<string, any>
    ? {
        [P in keyof T]: T[P] extends Record<string, any>
          ? P extends string
            ? `${P}.${KeyPaths<T[P]>}` | P
            : never
          : P
      }[keyof T]
    : never

  export type Get<T extends object, K extends string> = K extends keyof T
    ? T[K]
    : K extends `${infer Left}.${infer Rest}`
    ? Left extends keyof T
      ? T[Left] extends object
        ? Get<T[Left], Rest>
        : never
      : never
    : never

  export type Merge<T extends Record<any, any>, U> = U extends Record<any, any>
    ? {
        [I in keyof T | keyof U]: I extends keyof U
          ? U[I]
          : I extends keyof T
          ? T[I]
          : never
      }
    : T

  export type Assign<T extends Record<string, unknown>, U> = U extends [
    infer F,
    ...infer R
  ]
    ? Assign<Merge<T, F>, R>
    : T

  export namespace Is {
    export type Empty<O extends Object> = P.Equal<
      C.Length<Union.To.Tuple<keyof O>>,
      0
    >
  }
}
