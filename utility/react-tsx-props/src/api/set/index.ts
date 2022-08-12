import { PropTypeWrap } from '../../types/base'

export const setDefault = <T>(defaultV: T | undefined = undefined) => {
  return {
    instance: new PropTypeWrap<T>(),
    default: defaultV,
    required: true as const,
  }
}

export const setNotRequired = <T>(defaultV: T | undefined = undefined) => {
  return {
    instance: new PropTypeWrap<T>(),
    default: defaultV,
    required: false as const,
  }
}
