import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  cloneElement,
  ForwardedRef,
  forwardRef,
  ReactElement,
  Ref,
  Fragment,
} from 'react'
import { isStyledComponent, StyledComponent } from 'styled-components'
import { CharacterProps, defaultProps } from './model/props'

type AllowElement = StyledComponent<'img', any> | ReactElement<any, 'img'>

export type ImageProps<As extends AllowElement> = {
  ref?: Ref<HTMLImageElement>
  as?: As
} & CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children' | 'width' | 'height'>

const ImageInner = <As extends AllowElement>(
  { as, ..._props }: ImageProps<As>,
  ref: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )

  if (!as) {
    return <img {...props} ref={ref} />
  }

  const Component = (props: Omit<ImageProps<As>, 'as'>) =>
    isStyledComponent(as)
      ? cloneElement(<Fragment>{as}</Fragment>, props)
      : cloneElement(as, props)

  return <Component {...props} ref={ref} />
}

export const Image = forwardRef(ImageInner)

// export const Image = <As extends AllowElement>(
//   { as, ...props }: ImageProps<As>,
//   innerRef?: Ref<HTMLImageElement>
// ) => {
//   return <ImageWithRef {...props} ref={innerRef} as={as} />
// }
