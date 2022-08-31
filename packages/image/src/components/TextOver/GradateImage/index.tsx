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

export type TextOverGradateImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type TextOverGradateImageComponent = (
  props: TextOverGradateImageProps
) => ReactElement | null

const TextOverGradateImageInner: TextOverGradateImageComponent = (
  { ..._props }: TextOverGradateImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  const { duration, aboveText, width, height, ...attrs } = props

  return (
    <Root width={width} height={height}>
      <Mask duration={duration}>
        <Image {...attrs} ref={ref} />
        <TextWrap>{aboveText}</TextWrap>
      </Mask>
    </Root>
  )
}

export const TextOverGradateImage = forwardRef(TextOverGradateImageInner)
