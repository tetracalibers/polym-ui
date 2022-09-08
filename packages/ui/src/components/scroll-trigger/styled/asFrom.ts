import styled, { css, keyframes } from 'styled-components'

const upMove = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const downMove = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(100px);
  }
`

export const Fixed = styled.div`
  & > button {
    transition: all 0.3s;
  }

  && {
    /* 右下に固定 */
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 2;

    /* はじめは非表示 */
    opacity: 0;
    transform: translateY(100px);
  }

  &[data-visible='true'] {
    /* 上方向に出現 */
    animation: ${upMove} 0.5s forwards;
  }

  &[data-visible='false'] {
    /* 下方向に引っ込む */
    animation: ${downMove} 0.5s forwards;
  }
`
