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

export type TextOverFlipImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type TextOverFlipImageComponent = (
  props: TextOverFlipImageProps
) => ReactElement | null

const TextOverFlipImageInner: TextOverFlipImageComponent = (
  { ..._props }: TextOverFlipImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  const {
    trigger,
    duration,
    aboveText,
    width,
    height,
    bgColor,
    flipAxis,
    ...attrs
  } = props

  return (
    <Root width={width} height={height}>
      <Mask duration={duration} flipAxis={flipAxis}>
        <Image {...attrs} ref={ref} />
        <TextWrap flipAxis={flipAxis} bgColor={bgColor}>
          {aboveText}
        </TextWrap>
      </Mask>
    </Root>
  )
}

export const TextOverFlipImage = forwardRef(TextOverFlipImageInner)
