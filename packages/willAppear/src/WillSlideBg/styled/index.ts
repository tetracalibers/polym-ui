import { ElementType } from 'react'
import styled from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'

const slideAnimation = {
  from: {
    left: $.bgSlideFromLeft,
    right: $.bgSlideFromRight,
    top: $.bgSlideFromTop,
    bottom: $.bgSlideFromBottom,
  },
}

export const SlideBackground = styled.div<CharacterProps>`
  /* 子要素のwidthに合わせる */
  display: inline-block;
  animation-name: ${$.bgDelayKeyframes};
  animation-duration: ${({ animationDuration }) => animationDuration}s;
  animation-fill-mode: forwards;
  position: relative;
  overflow: hidden; /*はみ出た色要素を隠す*/
  opacity: 0;

  /* スライドする背景 */
  &::before {
    animation-name: ${({ slideFrom }) => slideAnimation.from[slideFrom]};
    animation-duration: ${({ animationDuration }) => animationDuration}s;
    animation-fill-mode: forwards;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${({ backgroundColor }) =>
      backgroundColor}; /*伸びる背景色の設定*/
  }
`

export const getChildrenWrapper = <As extends ElementType>(
  baseAs: As
) => styled(baseAs)<Omit<CharacterProps, 'slideFrom'>>`
  animation-name: ${$.childrenDelayKeyframes};
  animation-duration: ${({ animationDuration }) => animationDuration}s;
  animation-delay: 0.6s;
  animation-fill-mode: forwards;
  opacity: 0;

  /* 子要素のcolor指定を打ち消す */
  && {
    color: ${({ backgroundColor }) => backgroundColor};
  }
`
