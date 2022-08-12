import { Alias, Predicate as P } from 'ts-typedef-helper'

export type FromStrInUnion<U, S extends Alias.Primitive> = P.Equal<
  Extract<U, `${S}`>,
  never
> extends false
  ? S | Exclude<U, `${S}`>
  : U

export type ObjKeyCast<
  K extends Alias.ObjIndex,
  T extends Alias.ObjIndex = string
> = K extends infer Keys ? (Keys extends T ? Keys : never) : never
