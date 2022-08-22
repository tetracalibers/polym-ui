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
    animation: ${$.horizontalLineKeyframes} 0.5s linear 0s forwards; /*表示されて0秒後に上線が0.5秒かけて表示*/
  }

  /*下線*/
  &::after {
    bottom: 0;
    right: 0;
    animation: ${$.horizontalLineKeyframes} 0.5s linear 1s forwards; /*表示されて1秒後に下線が0.5秒かけて表示*/
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
    animation: ${$.verticalLineKeyframes} 0.5s linear 0.5s forwards; /*表示されて0.5秒後に右線が0.5秒かけて表示*/
  }

  /*左線*/
  &::after {
    bottom: 0;
    left: 0;
    animation: ${$.verticalLineKeyframes} 0.5s linear 1.5s forwards; /*表示されて1.5秒後に左線が0.5秒かけて表示*/
  }
`

export const ChildrenWrapper: StyledComponent<
  TagType,
  {}
> = styled.div<CharacterProps>`
  /*枠線内側の要素*/
  animation: ${$.childrenDelayKeyframes} 0.5s linear 1.5s forwards; /*1.5秒後に中央のエリアが0.5秒かけて表示*/
  opacity: 0; /*初期値を透過0にする*/
`
