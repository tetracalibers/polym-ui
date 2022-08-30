import _ from 'lodash'
import {
  Attributes,
  cloneElement,
  ComponentPropsWithoutRef,
  createElement,
  FC,
  ForwardedRef,
  forwardRef,
  ReactElement,
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

const allowHtmlTag = ['img', 'picture'] as const
type AllowElement = ReactElement<
  unknown,
  | typeof allowHtmlTag[number]
  | StyledComponent<typeof allowHtmlTag[number], any>
>

export type ImageProps<As extends AllowElement> = {
  ref?: Ref<
    As['type'] extends 'picture' ? HTMLPictureElement : HTMLImageElement
  >
  as?: As
} & CharacterProps &
  ComponentPropsWithoutRef<
    As['type'] extends AnyStyledComponent
      ? StyledComponentInnerComponent<As['type']>
      : As['type']
  >

// export type ImageComponent<As extends AllowElement> = (
//   props: ImageProps<As>
// ) => ReactElement<ImageProps<As>, As['type']> | null

const ImageInner = <As extends AllowElement>(
  { as, ..._props }: ImageProps<As>,
  ref: ForwardedRef<As>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  const Component = (props: Attributes) =>
    as !== undefined ? <>{as}</> : createElement('img', props)

  return <Component {...props} ref={ref} />
}

const ImageWithRef = forwardRef(ImageInner)

export const Image = <As extends AllowElement>(
  { as, ...props }: ImageProps<As>,
  innerRef: Ref<typeof ImageInner['arguments']['as']>
) => {
  return <ImageWithRef {...props} ref={innerRef} as={as} />
}
