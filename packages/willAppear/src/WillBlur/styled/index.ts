import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { computeBlurKeyframes } from './keyframes'

const thisCss = css<CharacterProps>`
  && {
    animation-name: ${({ blurRadius }) => computeBlurKeyframes(blurRadius)};
    animation-duration: ${({ animationDuration }) => animationDuration}s;
    animation-fill-mode: forwards;
  }
`

export const StyledElement = styled.div`
  ${thisCss}
`
