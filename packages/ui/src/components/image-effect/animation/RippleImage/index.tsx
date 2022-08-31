import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactElement,
} from 'react'
import { Image } from '../../core'
import { CharacterProps, defaultProps } from './model/props'
import { Mask } from './styled'

export type RippleImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type RippleImageComponent = (
  props: RippleImageProps
) => ReactElement | null

const RippleImageInner: RippleImageComponent = (
  { ..._props }: RippleImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  // prettier-ignore
  const { duration, ...attrs } = props
  return (
    <Mask {...props}>
      <Image {...attrs} ref={ref} />
    </Mask>
  )
}

export const RippleImage = forwardRef(RippleImageInner)
