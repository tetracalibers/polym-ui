import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'

const thisCss = css<CharacterProps>`
  animation-duration: ${$.smoothKeyframes};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-fill-mode: forwards;
  transform-origin: left;
  opacity: 0;
`

export const StyledElement: StyledComponent<TagType, {}> = styled.div`
  ${thisCss}
`
