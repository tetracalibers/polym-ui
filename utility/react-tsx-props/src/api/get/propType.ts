import { PropWithDefault } from '../../class/PropWithDefault'
import { GetOptionalKey, OptionRecord } from '../../types/base'
import { Object as O } from 'ts-typedef-helper'

type getPropTypesMap<O extends OptionRecord> = {
  [k in keyof O]: O[k]['instance'] extends PropWithDefault<infer T> ? T : never
}

export type getPropType<O extends OptionRecord> = Readonly<
  O.ByKeys.Partial<getPropTypesMap<O>, GetOptionalKey<O>>
>

/* -------------------------------------------------------------------------- */
/* test                                                                       */
/* -------------------------------------------------------------------------- */

import { SampleT } from '../../sample/sample'

type s_GetOptionalKey = GetOptionalKey<SampleT>
type s_PropTypesMap = getPropTypesMap<SampleT>
type s_getPropType = getPropType<SampleT>
