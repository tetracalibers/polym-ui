import _ from 'lodash'
import {
  cloneElement,
  ComponentPropsWithoutRef,
  ComponentType,
  createElement,
  ElementType,
  ForwardedRef,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
} from 'react'
import {
  AnyStyledComponent,
  isStyledComponent,
  StyledComponent,
  StyledComponentBase,
  StyledComponentInnerComponent,
} from 'styled-components'
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

// eslint-disable-next-line no-undef
type AllowElementTypeMap = { [k in AllowTag]: JSX.IntrinsicElements[k] }

type AllowElement = ElementType<AllowTag> | AllowTag

export type MediaObjectProps<As extends AllowElement> = {
  ref?: Ref<
    // eslint-disable-next-line no-undef
    HTMLElementTagNameMap[As extends AnyStyledComponent
      ? StyledComponentInnerComponent<As>
      : As extends ComponentType<infer T>
      ? T
      : never]
  >
  as?: As
} & CharacterProps &
  ComponentPropsWithoutRef<
    As extends AnyStyledComponent
      ? StyledComponentInnerComponent<As>
      : As extends ComponentType<infer T>
      ? T
      : never
  >

const MediaObjectInner = <As extends AllowElement>(
  { as, children, ..._props }: MediaObjectProps<As>,
  // eslint-disable-next-line no-undef
  ref?: ForwardedRef<MediaObjectProps<As>['ref']>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  const Component = as || ('div' as ElementType)

  return (
    <Component {...props} ref={ref}>
      {children}
    </Component>
  )
}

export const MediaObject = forwardRef(MediaObjectInner)
