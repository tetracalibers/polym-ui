import styled, { css, keyframes } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { styleMixin, StyleProps } from '../css-props/props'

const waveKeyframes = keyframes`
  0% {
    transform: scale(0.68);
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`

const rippleCircleStyle = css<StyleProps>`
  ${styleMixin}

  /*波紋の基点とするためrelativeを指定*/
  position: relative;
  /*波紋の形状*/
  display: inline-block;
  background: ${({ backgroundColor }) => backgroundColor};
  width: 70px;
  height: 70px;
  border-radius: 50%;
  color: ${({ color }) => color};
  outline: none;
  /*アニメーションの設定*/
  transition: all 0.3s;

  &:hover {
    ${({ hoverStyle }) => hoverStyle}
  }

  /*波形を2つ設定*/
  &::after,
  &::before {
    content: '';
    /*絶対配置で波形の位置を決める*/
    position: absolute;
    left: -25%;
    top: -25%;
    /*波形の形状*/
    border: 1px solid ${({ backgroundColor }) => backgroundColor};
    width: 150%;
    height: 150%;
    border-radius: 50%;
    /*はじめは不透明*/
    opacity: 1;
    /*ループするアニメーションの設定*/
    animation: 1s ${waveKeyframes} linear infinite;
  }

  /*波形の2つ目は0.5秒遅らせてアニメーション*/
  &::before {
    animation-delay: 0.5s;
  }

  /* childrenの中央配置 */
  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const RippleCircleButton = styled.button<StyleProps>`
  ${ResetCss.button}
  ${rippleCircleStyle}
`

export const RippleCircleLink = styled.a<StyleProps>`
  ${rippleCircleStyle}
`
