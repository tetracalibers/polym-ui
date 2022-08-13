import { Alias, Object as Obj, Predicate as P } from 'ts-typedef-helper'

export class PropTypeWrap<_T> {}

declare module 'react-tsx-props/_internal' {
  /* -------------------------------------------------------------------------- */
  /* Utility                                                                    */
  /* -------------------------------------------------------------------------- */

  export type Mutable<T> = {
    -readonly [P in keyof T]: T[P]
  }

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

  export type PartialByKeys<T, K extends keyof any = keyof T> = {
    [key in keyof T & K]?: T[key]
  } & {
    [key in Exclude<keyof T, K>]: T[key]
  } extends infer R
    ? { [P in keyof R]: R[P] }
    : never

  /* -------------------------------------------------------------------------- */
  /* PropTypeWrap                                                               */
  /* -------------------------------------------------------------------------- */

  export class PropTypeWrap<_T> {}

  export type PropTypeWrapInstance<T> = ReturnType<
    (arg: { new (): PropTypeWrap<T> }) => PropTypeWrap<T>
  >

  /* -------------------------------------------------------------------------- */
  /* Input Format                                                               */
  /* -------------------------------------------------------------------------- */

  export type OptionValueDictionary<T = unknown> = {
    instance: PropTypeWrapInstance<T>
    default: T | undefined
    required: boolean
  }

  export type OptionRecord<T = Alias.Primitive> = {
    [k: string]: OptionValueDictionary<T>
  }

  /* -------------------------------------------------------------------------- */
  /* Processing of "required" flag                                              */
  /* -------------------------------------------------------------------------- */

  export type GetOptionalKey<O extends OptionRecord> = keyof {
    [k in keyof O as O[k]['required'] extends false ? k : never]: O[k]
  }

  /* -------------------------------------------------------------------------- */
  /* Value type of InputObject                                                  */
  /* -------------------------------------------------------------------------- */

  export type ObjValToUnionKey<
    O extends OptionRecord,
    K extends keyof O = keyof O
  > = {
    [key in K as `${O[key]['default']}`]: key
  }

  export type ObjKVTypeLiteralMapping<O> = Obj.Flip<O>

  export type ObjValUnwrapLiteral<O, K extends keyof O = keyof O> = {
    [key in K]: O[key] extends infer T
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

  export type ObjValTypeMap<O extends OptionRecord<Alias.Primitive>> =
    ObjValToUnionKey<O> extends infer S1
      ? ObjKVTypeLiteralMapping<S1> extends infer S2
        ? ObjValUnwrapLiteral<S2> extends infer S3
          ? Mutable<S3>
          : never
        : never
      : never

  export type OptionValuePicker<
    I,
    O extends OptionRecord = OptionRecord
  > = ObjValTypeMap<O> extends infer MAP
    ? I extends keyof MAP
      ? MAP[I]
      : never
    : never

  /* -------------------------------------------------------------------------- */
  /* DefaultProps Type                                                          */
  /* -------------------------------------------------------------------------- */

  export type DefaultProps<O extends OptionRecord = OptionRecord> = {
    [k in keyof O]: {
      default: O[k]
    }
  }

  export type DefaultPropsBuilder<B extends DefaultProps> = B & {
    NowKey: unknown
  }

  /* -------------------------------------------------------------------------- */
  /* getPropType API helper                                                     */
  /* -------------------------------------------------------------------------- */

  export type getPropTypesMap<O extends OptionRecord> = {
    [k in keyof O]: O[k]['instance'] extends PropTypeWrapInstance<infer T>
      ? T
      : never
  }

  /* -------------------------------------------------------------------------- */
  /* set API helper                                                             */
  /* -------------------------------------------------------------------------- */

  export type RequiredReturnType<T> = {
    instance: PropTypeWrapInstance<T>
    default: NonNullable<T>
    required: true
  }

  export type NotRequiredReturnType<T> = {
    instance: PropTypeWrapInstance<T>
    default: NonNullable<T>
    required: false
  }
}
