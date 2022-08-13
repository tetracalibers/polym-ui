import { $ } from './helper'

declare module 'react-tsx-props/access' {
  export function getDefaultProps<T>(options: $.OptionRecord): T

  export type getPropType<O extends $.OptionRecord> = $.PartialByKeys<
    $.getPropTypesMap<O>,
    $.GetOptionalKey<O>
  >
}

declare module 'react-tsx-props/define' {
  export function Required<T>(defaultV: T | undefined): $.RequiredReturnType<T>
  export function NotRequired<T>(
    defaultV: T | undefined
  ): $.NotRequiredReturnType<T>
}
