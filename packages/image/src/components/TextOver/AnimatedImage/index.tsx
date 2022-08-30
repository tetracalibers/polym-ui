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

export type TextOverAnimatedImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type TextOverAnimatedImageComponent = (
  props: TextOverAnimatedImageProps
) => ReactElement | null

const TextOverAnimatedImageInner: TextOverAnimatedImageComponent = (
  { ..._props }: TextOverAnimatedImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  // prettier-ignore
  const { trigger, duration, aboveText, imgPaddingV, imgPaddingU, motionType, ...attrs } = props
  return (
    <Mask {...props}>
      <Image {...attrs} ref={ref} />
    </Mask>
  )
}

export const TextOverAnimatedImage = forwardRef(TextOverAnimatedImageInner)
