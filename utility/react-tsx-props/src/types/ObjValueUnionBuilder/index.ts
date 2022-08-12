import { Alias, Object as Obj } from 'ts-typedef-helper'
import { FromStrInUnion } from '../utility'
import { OptionRecord } from '../base'

type Mutable<T> = {
  -readonly [P in keyof T]: T[P]
}

type ObjValToUnionKey<O extends OptionRecord, K extends keyof O = keyof O> = {
  [key in K as `${O[key]['default']}`]: key
}

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

export type ObjValTypeMap<O extends OptionRecord<Alias.Primitive>> =
  ObjValToUnionKey<O> extends infer S1
    ? ObjKVTypeLiteralMapping<S1> extends infer S2
      ? ObjValUnwrapLiteral<S2> extends infer S3
        ? Mutable<S3>
        : never
      : never
    : never

/* -------------------------------------------------------------------------- */
/* test                                                                       */
/* -------------------------------------------------------------------------- */

import { SampleT } from '../../sample/sample'

type test_ObjValToUnionKey = ObjValToUnionKey<SampleT>
type test_ObjKVTypeLiteralMapping =
  ObjKVTypeLiteralMapping<test_ObjValToUnionKey>
type test_ObjValUnwrapLiteral =
  ObjValUnwrapLiteral<test_ObjKVTypeLiteralMapping>
type test_ObjValTypeMap = ObjValTypeMap<SampleT>
