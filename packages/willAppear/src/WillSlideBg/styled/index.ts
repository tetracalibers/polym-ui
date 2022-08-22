import styled, { StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'

const slideAnimation = {
  from: {
    left: $.bgSlideFromLeft,
    right: $.bgSlideFromRight,
    top: $.bgSlideFromTop,
    bottom: $.bgSlideFromBottom,
  },
}

export const SlideBackground: StyledComponent<
  TagType,
  {}
> = styled.div<CharacterProps>`
  animation-name: ${$.bgDelayKeyframes};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  position: relative;
  overflow: hidden; /*はみ出た色要素を隠す*/
  opacity: 0;

  /* スライドする背景 */
  &::before {
    animation-name: ${({ slideFrom }) => slideAnimation.from[slideFrom]};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #666; /*伸びる背景色の設定*/
  }
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
