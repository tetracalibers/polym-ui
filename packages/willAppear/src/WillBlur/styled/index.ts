import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import { computeBlurKeyframes } from './keyframes'
import { TagType } from '../../common/props'

const thisCss = css<CharacterProps>`
  animation-name: ${({ blurRadius }) => computeBlurKeyframes(blurRadius)};
  animation-duration: ${({ animationDuration }) => animationDuration}s;
  animation-fill-mode: forwards;
`

export const StyledElement: StyledComponent<TagType, {}> = styled.div`
  ${thisCss}
`
