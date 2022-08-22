import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'

const animation = {
  rotate: {
    X: $.rotateXKeyframes,
    Y: $.rotateYKeyframes,
    Zleft: $.rotateZleftKeyframes,
    Zright: $.rotateZrightKeyframes,
  },
}

const thisCss = css<CharacterProps>`
  animation-name: ${({ rotate }) => animation.rotate[rotate]};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-fill-mode: forwards;
`

export const StyledElement: StyledComponent<TagType, {}> = styled.div`
  ${thisCss}
`
