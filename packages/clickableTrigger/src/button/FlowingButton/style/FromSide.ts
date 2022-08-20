import styled, { css } from 'styled-components'
import { BaseStyled } from './Base'
import { FlowingButtonProps } from '../model/props'

const transform = (preset: FlowingButtonProps['preset']) => {
  return (
    ['from-left', 'from-right'].includes(preset) &&
    css`
      transform: scale(0, 1);
    `
  )
}

const transformOrigin = (preset: FlowingButtonProps['preset']) => {
  return (
    ['from-left', 'from-right'].includes(preset) &&
    css`
      transform-origin: ${preset} top;
    `
  )
}

const transitionProperty = (preset: FlowingButtonProps['preset']) => {
  return ['from-left', 'from-right'].includes(preset)
    ? css`
        transition-property: transform;
      `
    : css`
        transition-property: all;
      `
}

const transitionDuration = (preset: FlowingButtonProps['preset']) => {
  return ['from-left', 'from-right'].includes(preset)
    ? css`
        transition-duration: 0.6s;
      `
    : css`
        transition-duration: 0.3s;
      `
}

const height = (preset: FlowingButtonProps['preset']) => {
  return ['from-left', 'from-right'].includes(preset)
    ? css`
        height: 100%;
      `
    : css`
        height: 0;
      `
}

const hoverBeforeRuleset = (preset: FlowingButtonProps['preset']) => {
  return ['from-left', 'from-right'].includes(preset)
    ? css`
        ${transformOrigin(preset)}
        transform: scale(1, 1);
        height: 100%;
        background-color: #333;
      `
    : css`
        height: 100%;
        background-color: #333;
      `
}

const position = (preset: FlowingButtonProps['preset']) => {
  return ['from-left', 'from-right'].includes(preset)
    ? css`
        top: 0;
        ${preset}: 0;
      `
    : css`
        ${preset}: 0;
        left: 0;
      `
}

export const FromSideStyled = styled(BaseStyled)<FlowingButtonProps>`
  &::before {
    /* 位置調整 */
    content: '';
    position: absolute;
    ${({ preset }) => position(preset)}
    z-index: 2;
    /* 見た目 */
    background-color: '#333';
    width: 100%;
    ${({ preset }) => height(preset)}
    /* アニメーション */
    ${({ preset }) => transitionProperty(preset)}
    ${({ preset }) => transitionDuration(preset)}
    transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
    transition-delay: 0s;
    ${({ preset }) => transform(preset)}
    ${({ preset }) => transformOrigin(preset)}
  }

  &:hover::before {
    ${({ preset }) => hoverBeforeRuleset(preset)}
  }
`
