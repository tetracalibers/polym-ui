/* eslint-disable no-undef */
import _ from 'lodash'
import {
  ComponentClass,
  ComponentProps,
  FC,
  ForwardedRef,
  forwardRef,
} from 'react'
import { CharacterProps, defaultProps } from './model/props'

const allowTag = [
  'address',
  'section',
  'article',
  'div',
  'dd',
  'li',
  'p',
  'a',
] as const
type AllowTag = typeof allowTag[number]

type AllowElementPropsMap = { [k in AllowTag]: ComponentProps<k> }

type AllowElement =
  | AllowTag
  | ComponentClass<AllowElementPropsMap[AllowTag]>
  | FC<AllowElementPropsMap[AllowTag]>

export type MediaObjectProps<As extends AllowElement> = {
  ref?: ForwardedRef<
    As extends AllowTag
      ? HTMLElementTagNameMap[As]
      : As extends ComponentClass | FC
      ? As
      : never
  >
  as?: As
} & CharacterProps &
  ComponentProps<As>

export const MediaObjectInner = <As extends AllowElement>({
  as,
  children,
  ref,
  ..._props
}: MediaObjectProps<As>) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  if (allowTag.includes(as as AllowTag)) {
    const Tag = as as string
    return (
      <Tag {...props} ref={ref}>
        {children}
      </Tag>
    )
  }

  const Component = as as FC | ComponentClass

  return (
    <Component {...props} ref={ref}>
      {children}
    </Component>
  )
}

export const MediaObject = forwardRef(MediaObjectInner)
