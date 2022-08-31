/* eslint-disable no-undef */
import _ from 'lodash'
import {
  ComponentProps,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
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

export type MediaObjectProps<As extends AllowTag> = {
  ref?: ForwardedRef<HTMLElementTagNameMap[As]>
  as?: As
  children: ReactNode
} & CharacterProps &
  ComponentProps<As>

export type MediaObjectComponent = <As extends AllowTag>(
  props: MediaObjectProps<As>
) => ReactElement | null

export const MediaObjectInner = <As extends AllowTag>({
  as,
  children,
  ref,
  ..._props
}: MediaObjectProps<As>) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  if (as === undefined) {
    return (
      <div
        {...(props as Omit<MediaObjectProps<'div'>, 'as' | 'ref' | 'children'>)}
        ref={ref as ForwardedRef<HTMLDivElement>}
      >
        {children}
      </div>
    )
  }

  const Tag = as as string
  return (
    <Tag {...props} ref={ref}>
      {children}
    </Tag>
  )
}

export const MediaObject: MediaObjectComponent = forwardRef(MediaObjectInner)
