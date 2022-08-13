import { $ } from '../../helper'

export const Required = function <T>(defaultV: T | undefined = undefined) {
  return {
    instance: new $.PropTypeWrap() as $.PropTypeWrapInstance<T>,
    default: defaultV ?? defaultV!,
    required: true as const,
  }
}

export function NotRequired<T>(defaultV: T | undefined = undefined) {
  return {
    instance: new $.PropTypeWrap() as $.PropTypeWrapInstance<T>,
    default: defaultV ?? defaultV!,
    required: false as const,
  }
}

declare module 'react-tsx-props/define' {
  export function Required<T>(defaultV: T | undefined): $.RequiredReturnType<T>
  export function NotRequired<T>(
    defaultV: T | undefined
  ): $.NotRequiredReturnType<T>
}
