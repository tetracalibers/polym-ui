import styled, { createGlobalStyle, css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const OverlayWrapper = styled.div`
  /* 重ねる ---------------------------------------- */
  position: fixed;
  /* 左上の角が中央になるように配置 */
  top: 50%;
  left: 50%;
  /* 要素の中央がコンテナの中央になるよう修正 */
  transform: translate(-50%, -50%);
  z-index: 999;

  /* modal window自体のスタイル ------------------------ */
  background-color: rgba(236, 239, 241, 0.6);
  backdrop-filter: blur(10px);
  padding: 2rem;
  box-shadow: rgba(136, 165, 191, 0.2) 6px 2px 16px 0px,
    rgba(136, 165, 191, 0.2) -6px -2px 16px 0px;
  color: ${$.grayScale.dark};
  border-radius: 1rem;
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
