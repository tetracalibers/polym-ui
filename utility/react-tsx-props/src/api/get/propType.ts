import { GetOptionalKey, OptionRecord, PropTypeWrap } from '../../types/base'

type getPropTypesMap<O extends OptionRecord> = {
  [k in keyof O]: O[k]['instance'] extends PropTypeWrap<infer T> ? T : never
}

type PartialByKeys<T, K extends keyof any = keyof T> = {
  [key in keyof T & K]?: T[key]
} & {
  [key in Exclude<keyof T, K>]: T[key]
} extends infer R
  ? { [P in keyof R]: R[P] }
  : never

export type getPropType<O extends OptionRecord> = PartialByKeys<
  getPropTypesMap<O>,
  GetOptionalKey<O>
>

/* -------------------------------------------------------------------------- */
/* test                                                                       */
/* -------------------------------------------------------------------------- */

import { SampleT } from '../../sample/sample'

type s_GetOptionalKey = GetOptionalKey<SampleT>
type s_PropTypesMap = getPropTypesMap<SampleT>
type s_getPropType = getPropType<SampleT>
