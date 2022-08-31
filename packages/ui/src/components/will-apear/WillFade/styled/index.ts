import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
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
  && {
    animation-name: ${({ fadeFrom }) => animation.fadeFrom[fadeFrom]};
    animation-duration: ${({ animationDuration }) => animationDuration}s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
`

export const StyledElement = styled.div`
  ${thisCss}
`
