import styled, { css, keyframes } from 'styled-components'
import { match } from 'ts-pattern'

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

const toLeftMove = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const toRightMove = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 1;
    transform: translateX(100px);
  }
`

const fromBottomStyle = css`
  && {
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

const fromRightStyle = css`
  && {
    opacity: 0;
    transform: translateX(100px);
  }

  &[data-visible='true'] {
    /* 左方向に出現 */
    animation: ${toLeftMove} 0.5s forwards;
  }

  &[data-visible='false'] {
    /* 右方向に引っ込む */
    animation: ${toRightMove} 0.5s forwards;
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
  }

  ${({ theme }) =>
    theme.appearFrom === 'bottom' ? fromBottomStyle : fromRightStyle}
`
