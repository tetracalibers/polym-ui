import { $ } from 'react-tsx-props/util-types'
import _ from 'lodash'

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

export function getDefaultProps<T>(options: $.OptionRecord): T {
  type Opt = typeof options
  type OptKey = keyof Opt
  type OptVal = $.ObjValTypeMap<Opt>

  const defaults = _.mapValues(
    options as Opt,
    (v: OptVal) => v.default as OptVal[OptKey]
  ) as unknown
  return defaults as T
}

export type getPropType<O extends $.OptionRecord> = $.PartialByKeys<
  $.getPropTypesMap<O>,
  $.GetOptionalKey<O>
>

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
