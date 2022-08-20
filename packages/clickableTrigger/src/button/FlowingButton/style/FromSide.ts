import { match } from 'ts-pattern'
import styled, { css } from 'styled-components'
import { BaseStyled } from './Base'
import { FlowingButtonProps } from '../model/props'

const transform = (preset: FlowingButtonProps['preset']) => {
  return match(preset)
    .with('from-left', 'from-right', () => {
      return css`
        transform: scale(0, 1);
      `
    })
    .otherwise(() => '')
}

const transformOrigin = (preset: FlowingButtonProps['preset']) => {
  return match(preset)
    .with('from-left', () => {
      return css`
        transform-origin: left top;
      `
    })
    .with('from-right', () => {
      return css`
        transform-origin: right top;
      `
    })
    .otherwise(() => '')
}

const transitionProperty = (preset: FlowingButtonProps['preset']) => {
  return match(preset)
    .with('from-left', 'from-right', () => {
      return css`
        transition-property: transform;
      `
    })
    .with('up', 'down', () => {
      return css`
        transition-property: all;
      `
    })
    .otherwise(() => '')
}

const transitionDuration = (preset: FlowingButtonProps['preset']) => {
  return match(preset)
    .with('from-left', 'from-right', () => {
      return css`
        transition-duration: 0.6s;
      `
    })
    .with('up', 'down', () => {
      return css`
        transition-duration: 0.3s;
      `
    })
    .otherwise(() => '')
}

const height = (preset: FlowingButtonProps['preset']) => {
  return match(preset)
    .with('from-left', 'from-right', () => {
      return css`
        height: 100%;
      `
    })
    .with('up', 'down', () => {
      return css`
        height: 0;
      `
    })
    .otherwise(() => '')
}

const hoverBeforeRuleset = (preset: FlowingButtonProps['preset']) => {
  return match(preset)
    .with('from-left', 'from-right', () => {
      return css`
        ${transformOrigin(preset)}
        transform: scale(1, 1);
      `
    })
    .otherwise(() => '')
}

const position = (preset: FlowingButtonProps['preset']) => {
  return match(preset)
    .with('from-left', () => {
      return css`
        top: 0;
        left: 0;
      `
    })
    .with('from-right', () => {
      return css`
        top: 0;
        right: 0;
      `
    })
    .with('down', () => {
      return css`
        top: 0;
        left: 0;
      `
    })
    .with('up', () => {
      return css`
        bottom: 0;
        left: 0;
      `
    })
    .otherwise(() => '')
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
    height: 100%;
    background-color: #333;
  }
`
