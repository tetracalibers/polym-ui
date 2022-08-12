import { Alias } from 'ts-typedef-helper'
import { PropWithDefault } from '../../class/PropWithDefault'

export type OptionValueDictionary<T = unknown> = {
  instance: PropWithDefault<T>
  default: T
}

export type OptionRecord<T = Alias.Primitive> = {
  [k: string]: OptionValueDictionary<T>
}
