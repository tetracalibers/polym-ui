import styled, { css, keyframes } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import * as $ from './keyframes'

const animation = {
  fadeFrom: {
    here: $.fadeInKeyframes,
    bottom: $.fadeUpKeyframes,
    top: $.fadeDownKeyframes,
    left: $.fadeLeftKeyframes,
    right: $.fadeRightKeyframes,
  },
}

const thisCss = css<CharacterProps>`
  animation-name: ${({ fadeFrom }) => animation.fadeFrom[fadeFrom]};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-fill-mode: forwards;
  opacity: 0;
`

export const StyledButton = styled.button<CharacterProps>`
  ${ResetCss.button}
  ${thisCss}
`

export const StyledLink = styled.a<CharacterProps>`
  ${thisCss}
`
