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
  const {
    aboveText,
    width,
    height,
    bgDuration,
    txtDuration,
    coverOpacity,
    gradientFrom,
    gradientTo,
    gradientSlope,
    trigger,
    ...attrs
  } = props

  return (
    <Root width={width} height={height}>
      <Mask
        bgDuration={bgDuration}
        coverOpacity={coverOpacity}
        gradientFrom={gradientFrom}
        gradientTo={gradientTo}
        gradientSlope={gradientSlope}
        trigger={trigger}
      >
        <Image {...attrs} ref={ref} />
        <TextWrap txtDuration={txtDuration} trigger={trigger}>
          {aboveText}
        </TextWrap>
      </Mask>
    </Root>
  )
}

export const TextOverGradateImage = forwardRef(TextOverGradateImageInner)
