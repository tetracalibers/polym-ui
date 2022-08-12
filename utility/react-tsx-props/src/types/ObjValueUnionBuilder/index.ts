import { Alias, Object as Obj } from 'ts-typedef-helper'
import { FromStrInUnion, ObjKeyCast } from '../utility'
import { OptionRecord } from '../base'

type FlipByDefault<
  K extends string,
  O extends OptionRecord<Alias.Primitive>
> = {
  [key in K as `${O[key]['default']}`]: K
}

type ObjValToUnionKey<
  K extends string,
  O extends OptionRecord<Alias.Primitive>
> = FlipByDefault<K, O>

type ObjKVTypeLiteralMapping<O> = Obj.Flip<O>

type ObjValUnwrapLiteral<O, K extends keyof O = keyof O> = {
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

export type ObjValTypeMap<
  O extends OptionRecord<Alias.Primitive>,
  K extends keyof O
> = ObjValToUnionKey<ObjKeyCast<K>, O> extends infer STATE1
  ? ObjKVTypeLiteralMapping<STATE1> extends infer STATE2
    ? ObjValUnwrapLiteral<STATE2> extends infer RESULT
      ? RESULT
      : never
    : never
  : never
