import { PropWithDefault } from '../../class/PropWithDefault'

export const setDefault = <T>(defaultV: T) => {
  const ins = new PropWithDefault<T>(defaultV)
  return {
    instance: ins,
    default: ins.default,
    required: true as const,
  }
}

export const setNotRequired = <T>() => {
  const ins = new PropWithDefault<T>()
  return {
    instance: ins,
    default: undefined,
    required: false as const,
  }
}
