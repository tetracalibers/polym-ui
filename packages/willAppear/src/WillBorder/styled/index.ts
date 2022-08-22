import styled, { StyledComponent } from 'styled-components'
import { CharacterProps } from '../model/props'
import * as $ from './keyframes'
import { TagType } from '../../common/props'

// 上下線が伸びる設定
export const WillHorizontalLine: StyledComponent<
  TagType,
  {}
> = styled.div<CharacterProps>`
  position: relative; /* 枠線が書かれる基点*/

  /*上下線*/
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 0;
    height: 1px;
    background: #333; /* 枠線の色*/
  }

  /*上線*/
  &::before {
    top: 0;
    left: 0;
    /*表示されて0秒後に上線が0.5秒かけて表示*/
    animation-name: ${$.horizontalLineKeyframes};
    animation-duration: 0.5s;
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
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
`

// 左右線が伸びる設定
export const WillVerticalLine: StyledComponent<
  TagType,
  {}
> = styled.div<CharacterProps>`
  /*左右線*/
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 1px;
    height: 0;
    background: #333; /* 枠線の色*/
  }

  /*右線*/
  &::before {
    top: 0;
    right: 0;
    /*表示されて0.5秒後に右線が0.5秒かけて表示*/
    animation-name: ${$.verticalLineKeyframes};
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }

  /*左線*/
  &::after {
    bottom: 0;
    left: 0;
    /*表示されて1.5秒後に左線が0.5秒かけて表示*/
    animation-name: ${$.verticalLineKeyframes};
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
  }
`

export const ChildrenWrapper: StyledComponent<
  TagType,
  {}
> = styled.div<CharacterProps>`
  /*1.5秒後に中央のエリアが0.5秒かけて表示*/
  animation-name: ${$.childrenDelayKeyframes};
  animation-duration: 0.5s;
  animation-timing-function: linear;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
  opacity: 0; /*初期値を透過0にする*/
`
