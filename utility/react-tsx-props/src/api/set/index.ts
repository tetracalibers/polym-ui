import { Alias } from 'ts-typedef-helper'
import { PropWithDefault } from '../../class/PropWithDefault'

export const setDefault = <T>(defaultV: T) => {
  const ins = new PropWithDefault<T>(defaultV)
  return {
    instance: ins,
    default: ins.default,
  }
}

export const setNullable = <T>(defaultV: T | Alias.EmptyType = undefined) => {
  return setDefault<T | Alias.EmptyType>(defaultV)
}
