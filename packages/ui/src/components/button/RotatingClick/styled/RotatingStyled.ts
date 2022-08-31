import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ResetCss } from 'styled-utility-first'
import { styleMixin } from '../css-props/props'

const hoverNth1Rotate = (rotateTo: CharacterProps['rotateTo']) => {
  return css`
    transform: rotateX(${rotateTo === 'front' ? '-90def' : '90deg'});
  `
}

const nth2Rotate = (rotateTo: CharacterProps['rotateTo']) => {
  return css`
    transform: rotateX(${rotateTo === 'front' ? '90deg' : '-90deg'});
  `
}

const rotatingCss = css<CharacterProps>`
  /* 背景の基点 */
  position: relative;
  /* ボタンの形状 */
  display: inline-block;
  width: 100%;
  max-width: ${({ width }) => width};
  height: ${({ height }) => height};
  line-height: ${({ height }) => height};
  text-align: center;
  outline: none;

  & span {
    ${styleMixin}
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    /* 重なりを3dで表示 */
    transform-style: preserve-3d;
    transition-property: all;
    /* 数字が小さくなるほど早く回転 */
    transition-duration: ${({ transitionDuration }) => transitionDuration}s;
  }

  /* 回転前 */
  & span:nth-child(1) {
    background: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    /* 初めは回転なし */
    transform: rotateX(0deg);
    /* 回転する起点 */
    transform-origin: 0 50% -25px;
  }

  &:hover span:nth-child(1) {
    ${({ rotateTo }) => hoverNth1Rotate(rotateTo)}
  }

  /* 回転後 */
  & span:nth-child(2) {
    background: ${({ color }) => color};
    color: ${({ backgroundColor }) => backgroundColor};
    ${({ rotateTo }) => nth2Rotate(rotateTo)}
    transform-origin: 0 50% -25px; /* 回転する起点 */
  }

  &:hover span:nth-child(2) {
    transform: rotateX(0deg); /* X軸に0度回転 */
  }
`

export const RotatingButton = styled.button<CharacterProps>`
  ${ResetCss.button}
  ${rotatingCss}
`

export const RotatingLink = styled.a<CharacterProps>`
  ${rotatingCss}
`
