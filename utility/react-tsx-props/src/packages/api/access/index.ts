import _ from 'lodash'
import * as $ from 'react-tsx-props/_internal'

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
