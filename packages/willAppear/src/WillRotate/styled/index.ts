import { ElementType } from 'react'
import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'

const animation = {
  rotate: {
    X: $.rotateXKeyframes,
    Y: $.rotateYKeyframes,
    Zleft: $.rotateZleftKeyframes,
    Zright: $.rotateZrightKeyframes,
  },
}

const thisCss = css<CharacterProps>`
  && {
    animation-name: ${({ rotate }) => animation.rotate[rotate]};
    animation-duration: ${({ animationDuration }) => animationDuration}s;
    animation-fill-mode: forwards;
  }
`

export const StyledElement = styled.div`
  ${thisCss}
`
