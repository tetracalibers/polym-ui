import { Alias } from 'ts-typedef-helper'
import { PropWithDefault } from '../../class/PropWithDefault'

export type OptionValueDictionary<T = unknown> = {
  instance: PropWithDefault<T>
  default: T | undefined
  required: boolean
}

export type OptionRecord<T = Alias.Primitive> = {
  [k: string]: OptionValueDictionary<T>
}

export type GetOptionalKey<O extends OptionRecord> = keyof {
  [k in keyof O as O[k]['required'] extends false ? k : never]: O[k]
}
