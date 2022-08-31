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
  // prettier-ignore
  const { trigger, bgDuration, aboveText, imgPaddingV, imgPaddingU, motionType, width, height, bgColor, bgOpacity, txtDuration, ...attrs } = props
  return (
    <Root width={width} height={height}>
      <Mask
        bgDuration={bgDuration}
        bgOpacity={bgOpacity}
        bgColor={bgColor}
        motionType={motionType}
        trigger={trigger}
        imgPaddingV={imgPaddingV}
        imgPaddingU={imgPaddingU}
      >
        <Image {...attrs} ref={ref} />
        <TextWrap txtDuration={txtDuration} trigger={trigger}>
          {aboveText}
        </TextWrap>
      </Mask>
    </Root>
  )
}

export const TextOverFramedImage = forwardRef(TextOverFramedImageInner)
