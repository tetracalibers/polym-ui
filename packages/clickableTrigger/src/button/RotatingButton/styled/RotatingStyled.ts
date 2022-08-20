import styled, { css } from 'styled-components'
import { RotatingButtonProps } from '../model/props'
import { ResetCss } from 'styled-utility-first'
import { styleMixin } from '../css-props/props'

const hoverNth1Rotate = (rotateTo: RotatingButtonProps['rotateTo']) => {
  return css`
    transform: rotateX(${rotateTo === 'front' ? '-90def' : '90deg'});
  `
}

const nth2Rotate = (rotateTo: RotatingButtonProps['rotateTo']) => {
  return css`
    transform: rotateX(${rotateTo === 'front' ? '90deg' : '-90deg'});
  `
}

export const RotatingStyled = styled.button<RotatingButtonProps>`
  ${ResetCss.button}
  ${styleMixin}

  /* 背景の基点 */
  position: relative;
  /* ボタンの形状 */
  display: inline-block;
  width: 100%;
  max-width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  outline: none;

  & span {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    /* 重なりを3dで表示 */
    transform-style: preserve-3d;
    /* 数字が小さくなるほど早く回転 */
    transition: 0.5s;
  }

  /* 回転前 */
  & span:nth-child(1) {
    background: #fff;
    color: #000;
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
    background: #000;
    color: #fff;
    ${({ rotateTo }) => nth2Rotate(rotateTo)}
    transform-origin: 0 50% -25px; /* 回転する起点 */
  }

  &:hover span:nth-child(2) {
    transform: rotateX(0deg); /* X軸に0度回転 */
  }
`
