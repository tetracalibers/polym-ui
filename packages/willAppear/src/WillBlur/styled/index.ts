import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import { blurKeyframes } from './keyframes'
import { TagType } from '../../common/props'

const thisCss = css<CharacterProps>`
  animation-name: ${blurKeyframes};
  animation-duration: ${({ animationDuration }) => animationDuration};
  animation-fill-mode: forwards;
`

export const StyledElement: StyledComponent<TagType, {}> = styled.div`
  ${thisCss}
`
