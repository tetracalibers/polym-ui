declare type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

declare type FromStrInUnion<
  U,
  S extends import('ts-typedef-helper').Alias.Primitive
> = import('ts-typedef-helper').Predicate.Equal<
  Extract<U, `${S}`>,
  never
> extends false
  ? S | Exclude<U, `${S}`>
  : U

declare type ObjKeyCast<
  K extends import('ts-typedef-helper').Alias.ObjIndex,
  T extends import('ts-typedef-helper').Alias.ObjIndex = string
> = K extends infer Keys ? (Keys extends T ? Keys : never) : never

declare type PartialByKeys<T, K extends keyof any = keyof T> = {
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

declare type PropTypeWrapInstance<T> = ReturnType<
  (arg: { new (): PropTypeWrap<T> }) => PropTypeWrap<T>
>

/* -------------------------------------------------------------------------- */
/* Input Format                                                               */
/* -------------------------------------------------------------------------- */

declare type OptionValueDictionary<T = unknown> = {
  instance: PropTypeWrapInstance<T>
  default: T | undefined
  required: boolean
}

declare type OptionRecord<T = import('ts-typedef-helper').Alias.Primitive> = {
  [k: string]: OptionValueDictionary<T>
}

/* -------------------------------------------------------------------------- */
/* Processing of "required" flag                                              */
/* -------------------------------------------------------------------------- */

declare type GetOptionalKey<O extends OptionRecord> = keyof {
  [k in keyof O as O[k]['required'] extends false ? k : never]: O[k]
}

/* -------------------------------------------------------------------------- */
/* Value declare type of InputObject                                                  */
/* -------------------------------------------------------------------------- */

declare type ObjValToUnionKey<
  O extends OptionRecord,
  K extends keyof O = keyof O
> = {
  [key in K as `${O[key]['default']}`]: key
}

declare type ObjKVTypeLiteralMapping<O> =
  import('ts-typedef-helper').Object.Flip<O>

declare type ObjValUnwrapLiteral<O, K extends keyof O = keyof O> = {
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

declare type ObjValTypeMap<O extends OptionRecord> =
  ObjValToUnionKey<O> extends infer S1
    ? ObjKVTypeLiteralMapping<S1> extends infer S2
      ? ObjValUnwrapLiteral<S2> extends infer S3
        ? Mutable<S3>
        : never
      : never
    : never

declare type OptionValuePicker<
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

declare type DefaultProps<O extends OptionRecord = OptionRecord> = {
  [k in keyof O]: {
    default: O[k]
  }
}

declare type DefaultPropsBuilder<B extends DefaultProps> = B & {
  NowKey: unknown
}

/* -------------------------------------------------------------------------- */
/* getPropType API helper                                                     */
/* -------------------------------------------------------------------------- */

declare type getPropTypesMap<O extends OptionRecord> = {
  [k in keyof O]: O[k]['instance'] extends PropTypeWrapInstance<infer T>
    ? T
    : never
}

/* -------------------------------------------------------------------------- */
/* set API helper                                                             */
/* -------------------------------------------------------------------------- */

declare type RequiredReturnType<T> = {
  instance: PropTypeWrapInstance<T>
  default: NonNullable<T>
  required: true
}

declare type NotRequiredReturnType<T> = {
  instance: PropTypeWrapInstance<T>
  default: NonNullable<T>
  required: false
}

export type {
  Mutable,
  FromStrInUnion,
  ObjKeyCast,
  PartialByKeys,
  PropTypeWrapInstance,
  OptionValueDictionary,
  OptionRecord,
  GetOptionalKey,
  ObjValToUnionKey,
  ObjKVTypeLiteralMapping,
  ObjValUnwrapLiteral,
  ObjValTypeMap,
  OptionValuePicker,
  DefaultPropsBuilder,
  getPropTypesMap,
  RequiredReturnType,
  NotRequiredReturnType,
}
