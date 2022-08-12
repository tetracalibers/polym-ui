import { PropWithDefault } from '../../class/PropWithDefault'
import { OptionRecord } from '../../types/base'
import { Object as O } from 'ts-typedef-helper'

type GetOptionalKey<O extends OptionRecord> = keyof {
  [k in keyof O as O[k]['required'] extends false ? k : never]: O[k]
}

type getPropTypesMap<O extends OptionRecord> = {
  [k in keyof O]: O[k]['instance'] extends PropWithDefault<infer T> ? T : never
}

export type getPropType<O extends OptionRecord> = Readonly<
  O.ByKeys.Partial<getPropTypesMap<O>, GetOptionalKey<O>>
>

/* -------------------------------------------------------------------------- */
/* test                                                                       */
/* -------------------------------------------------------------------------- */

import { sampleProps } from '../../sample/sample'

type Sample = typeof sampleProps
type s_GetOptionalKey = GetOptionalKey<Sample>
type s_PropTypesMap = getPropTypesMap<Sample>
type s_getPropType = getPropType<Sample>
