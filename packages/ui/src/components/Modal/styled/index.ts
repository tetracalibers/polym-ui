import styled, { createGlobalStyle, css, keyframes } from 'styled-components'
import { ColorPalette as $, ResetCss } from 'styled-utility-first'
import { Button } from '../../core/Button'

const show = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
  }
  99.9%, to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`

export const OverlayWrapper = styled.div`
  /* 重ねる ---------------------------------------- */
  position: fixed;
  /* 左上の角が中央になるように配置 */
  top: 50%;
  left: 50%;
  /* 要素の中央がコンテナの中央になるよう修正 */
  transform: translate(-50%, -50%) scale(0.3);
  z-index: 999;
  /* 縮んだ分広がる */
  margin-right: -25%;

  /* modal window自体のスタイル ------------------------ */
  background-color: rgba(236, 239, 241, 0.6);
  backdrop-filter: blur(10px);
  padding: 2rem;
  box-shadow: rgba(136, 165, 191, 0.2) 6px 2px 16px 0px,
    rgba(136, 165, 191, 0.2) -6px -2px 16px 0px;
  color: ${$.grayScale.dark};
  border-radius: 1rem;

  animation-name: ${show};
  animation-duration: 0.75s;
  animation-fill-mode: forwards;
`

export const BackCover = createGlobalStyle`
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    backdrop-filter: blur(6px) contrast(.5) brightness(.9);
  }
`

export const CloseButton = styled(Button)`
  ${ResetCss.button}

  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2.5rem;
  color: #4a5459;
  transition: box-shadow 0.5s, background-color 0.75s;
  height: 2.5rem;
  width: 2.5rem;
  box-sizing: content-box;
  border-radius: 50%;

  &:focus,
  &:hover {
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
      rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  }
`
