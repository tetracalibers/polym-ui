import styled, { css, StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'

export const SlideBackground: StyledComponent<
  TagType,
  {}
> = styled.div<CharacterProps>`
  animation-name: ${$.slideBgKeyframes};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: relative;
  overflow: hidden; /*はみ出た色要素を隠す*/
  opacity: 0;
`

export const ChildrenWrapper: StyledComponent<
  TagType,
  {}
> = styled.div<CharacterProps>`
  animation-name: ${$.childrenDelayKeyframes};
  animation-duration: 1s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  opacity: 0;
`
