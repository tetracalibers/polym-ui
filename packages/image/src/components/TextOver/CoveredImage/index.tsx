import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  ForwardedRef,
  forwardRef,
  ReactElement,
} from 'react'
import { Image } from '../../core'
import { CharacterProps, defaultProps } from './model/props'
import { Mask, Root, TextWrap } from './styled'

export type TextOverCoveredImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type TextOverCoveredImageComponent = (
  props: TextOverCoveredImageProps
) => ReactElement | null

const TextOverCoveredImageInner: TextOverCoveredImageComponent = (
  { ..._props }: TextOverCoveredImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  // prettier-ignore
  const { trigger, duration, aboveText, imgPaddingV, imgPaddingU, motionType, ...attrs } = props
  return (
    <Root {...props}>
      <Mask {...props}>
        <Image {...attrs} ref={ref} />
        <TextWrap {...props}>{aboveText}</TextWrap>
      </Mask>
    </Root>
  )
}

export const TextOverCoveredImage = forwardRef(TextOverCoveredImageInner)
