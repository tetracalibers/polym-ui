import { ElementType } from 'react'
import styled, { StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'

const eachAnimationDuration = (
  duration: CharacterProps['animationDuration']
) => {
  return duration / 4
}

// 上下線が伸びる設定
export const WillHorizontalLine = styled.div<CharacterProps>`
  position: relative; /* 枠線が書かれる基点*/
  /* 子要素のwidthに合わせる */
  display: inline-block;
  /*上下線*/
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 1px;
    background: ${({ borderColor }) => borderColor}; /* 枠線の色*/
  }

  /*上線*/
  &::before {
    top: 0;
    left: 0;
    /*表示されて0秒後に上線が0.5秒かけて表示*/
    animation-name: ${$.horizontalLineKeyframes};
    animation-duration: ${({ animationDuration }) =>
      eachAnimationDuration(animationDuration)}s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-fill-mode: forwards;
  }

  /*下線*/
  &::after {
    bottom: 0;
    right: 0;
    /*表示されて1秒後に下線が0.5秒かけて表示*/
    animation-name: ${$.horizontalLineKeyframes};
    animation-duration: ${({ animationDuration }) =>
      eachAnimationDuration(animationDuration)}s;
    animation-timing-function: linear;
    animation-delay: ${({ animationDuration }) =>
      eachAnimationDuration(animationDuration) * 2}s;
    animation-fill-mode: forwards;
  }
`

// 左右線が伸びる設定
export const WillVerticalLine = styled.div<CharacterProps>`
  /*左右線*/
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 0;
    background: ${({ borderColor }) => borderColor}; /* 枠線の色*/
  }

  /*右線*/
  &::before {
    top: 0;
    right: 0;
    /*表示されて0.5秒後に右線が0.5秒かけて表示*/
    animation-name: ${$.verticalLineKeyframes};
    animation-duration: ${({ animationDuration }) =>
      eachAnimationDuration(animationDuration)}s;
    animation-timing-function: linear;
    animation-delay: ${({ animationDuration }) =>
      eachAnimationDuration(animationDuration)}s;
    animation-fill-mode: forwards;
  }

  /*左線*/
  &::after {
    bottom: 0;
    left: 0;
    /*表示されて1.5秒後に左線が0.5秒かけて表示*/
    animation-name: ${$.verticalLineKeyframes};
    animation-duration: ${({ animationDuration }) =>
      eachAnimationDuration(animationDuration)}s;
    animation-timing-function: linear;
    animation-delay: ${({ animationDuration }) =>
      eachAnimationDuration(animationDuration) * 3}s;
    animation-fill-mode: forwards;
  }
`

export const getChildrenWrapper = <As extends ElementType>(
  baseAs: As
) => styled(baseAs)<CharacterProps>`
  /*1.5秒後に中央のエリアが0.5秒かけて表示*/
  animation-name: ${$.childrenDelayKeyframes};
  animation-duration: ${({ animationDuration }) =>
    eachAnimationDuration(animationDuration)}s;
  animation-timing-function: linear;
  animation-delay: ${({ animationDuration }) =>
    eachAnimationDuration(animationDuration) * 3}s;
  animation-fill-mode: forwards;
  opacity: 0; /*初期値を透過0にする*/
`
