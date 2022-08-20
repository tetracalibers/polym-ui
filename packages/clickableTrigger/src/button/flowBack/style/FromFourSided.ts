import styled, { css } from 'styled-components'
import { BaseStyled } from './Base'
import { FromFourSidedProps } from '../model/props'

const transformOrigin = (from: FromFourSidedProps['from']) => {
  return (
    ['left', 'right'].includes(from) &&
    css`
      transform-origin: ${from} top;
    `
  )
}

const transitionDuration = (from: FromFourSidedProps['from']) => {
  return ['left', 'right'].includes(from)
    ? css`
        transition-duration: 0.6s;
      `
    : css`
        transition-duration: 0.3s;
      `
}

const height = (from: FromFourSidedProps['from']) => {
  return ['left', 'right'].includes(from)
    ? css`
        height: 100%;
      `
    : css`
        height: 0;
      `
}

const hoverBeforeRuleset = (from: FromFourSidedProps['from']) => {
  return ['left', 'right'].includes(from)
    ? css`
        ${transformOrigin(from)}
        transform: scale(1, 1);
      `
    : css`
        height: 100%;
        background-color: #333;
      `
}

const position = (from: FromFourSidedProps['from']) => {
  return ['left', 'right'].includes(from)
    ? css`
        top: 0;
        ${from}: 0;
      `
    : css`
        ${from}: 0;
        left: 0;
      `
}

export const FromFourSidedStyled = styled(BaseStyled)<FromFourSidedProps>`
  &::before {
    /* 位置調整 */
    content: '';
    position: absolute;
    ${({ from }) => position(from)}
    z-index: 2;
    /* 見た目 */
    background-color: '#333';
    width: 100%;
    ${({ from }) => height(from)}
    /* アニメーション */
    transition-property: transform;
    ${({ from }) => transitionDuration(from)}
    transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
    transition-delay: 0s;
    transform: scale(0, 1);
    ${({ from }) => transformOrigin(from)}
  }

  &:hover::before {
    ${({ from }) => hoverBeforeRuleset(from)}
  }
`
