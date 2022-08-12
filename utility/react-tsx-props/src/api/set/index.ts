import { PropTypeWrap } from '../../types/base'

export const Required = <T>(defaultV: T | undefined = undefined) => {
  return {
    instance: new PropTypeWrap<T>(),
    default: defaultV ?? defaultV!,
    required: true as const,
  }
}

export const NotRequired = <T>(defaultV: T | undefined = undefined) => {
  return {
    instance: new PropTypeWrap<T>(),
    default: defaultV ?? defaultV!,
    required: false as const,
  }
}
