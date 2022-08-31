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

export type TextOverFramedImageProps = CharacterProps &
  Omit<ComponentPropsWithoutRef<'img'>, 'children'>

export type TextOverFramedImageComponent = (
  props: TextOverFramedImageProps
) => ReactElement | null

const TextOverFramedImageInner: TextOverFramedImageComponent = (
  { ..._props }: TextOverFramedImageProps,
  ref?: ForwardedRef<HTMLImageElement>
) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  const {
    trigger,
    aboveText,
    imgPadding,
    width,
    height,
    txtDuration,
    imgBlur,
    imgOpacity,
    ...attrs
  } = props

  return (
    <Root width={width} height={height}>
      <Mask imgPadding={imgPadding} imgBlur={imgBlur} imgOpacity={imgOpacity}>
        <Image {...attrs} ref={ref} />
        <TextWrap txtDuration={txtDuration} trigger={trigger}>
          {aboveText}
        </TextWrap>
      </Mask>
    </Root>
  )
}

export const TextOverFramedImage = forwardRef(TextOverFramedImageInner)
