import { match } from 'ts-pattern'
import styled, { css, keyframes } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { CharacterProps } from '../model/props'
import { styleMixin } from '../css-props/props'

const diagonalKeyframes = keyframes`
  99.9%, to {
    left: -10%;
  }
`

const transform = (preset: CharacterProps['preset']) => {
  return match(preset)
    .with('from-left', 'from-right', 'center-to-horizontal', () => {
      return css`
        transform: scale(0, 1);
      `
    })
    .with('center-to-vertical', () => {
      return css`
        transform: scale(1, 0);
      `
    })
    .with('center-to-corner', () => {
      return css`
        transform: scale(0, 0);
      `
    })
    .otherwise(() => '')
}

const transformOrigin = (preset: CharacterProps['preset']) => {
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
    .with('center-to-horizontal', () => {
      return css`
        transform-origin: top;
      `
    })
    .with('center-to-vertical', 'center-to-corner', () => {
      return css`
        transform-origin: center;
      `
    })
    .otherwise(() => '')
}

const transitionProperty = (preset: CharacterProps['preset']) => {
  return match(preset)
    .with(
      'from-left',
      'from-right',
      'center-to-horizontal',
      'center-to-vertical',
      'center-to-corner',
      () => {
        return css`
          transition-property: transform;
        `
      }
    )
    .with('up', 'down', () => {
      return css`
        transition-property: all;
      `
    })
    .otherwise(() => '')
}

const width = (preset: CharacterProps['preset']) => {
  return match(preset)
    .with('diagonal', () => {
      return css`
        width: 120%;
      `
    })
    .otherwise(() => {
      return css`
        width: 100%;
      `
    })
}

const height = (preset: CharacterProps['preset']) => {
  return match(preset)
    .with(
      'from-left',
      'from-right',
      'center-to-horizontal',
      'center-to-vertical',
      'center-to-corner',
      'diagonal',
      () => {
        return css`
          height: 100%;
        `
      }
    )
    .with('up', 'down', () => {
      return css`
        height: 0;
      `
    })
    .otherwise(() => '')
}

const hoverBeforeAnimation = (preset: CharacterProps['preset']) => {
  return match(preset)
    .with(
      'from-left',
      'from-right',
      'center-to-horizontal',
      'center-to-vertical',
      'center-to-corner',
      () => {
        return css`
          ${transformOrigin(preset)}
          transform: scale(1, 1);
        `
      }
    )
    .with('diagonal', () => {
      return css`
        animation: ${diagonalKeyframes} 0.5s forwards;
      `
    })
    .otherwise(() => '')
}

const position = (preset: CharacterProps['preset']) => {
  return match(preset)
    .with(
      'from-left',
      'center-to-horizontal',
      'center-to-vertical',
      'center-to-corner',
      () => {
        return css`
          top: 0;
          left: 0;
        `
      }
    )
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
    .with('diagonal', () => {
      return css`
        top: 0;
        left: -130%;
      `
    })
    .otherwise(() => '')
}

const beforeAnimation = (
  preset: CharacterProps['preset'],
  duration: CharacterProps['transitionDuration']
) => {
  return match(preset)
    .with('diagonal', () => {
      return css`
        transform: skewX(-25deg);
      `
    })
    .otherwise(() => {
      return css`
        ${transitionProperty(preset)}
        transition-duration: ${duration}s;
        transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
        transition-delay: 0s;
        ${transform(preset)}
        ${transformOrigin(preset)}
      `
    })
}

const flowingCss = css<CharacterProps>`
  ${styleMixin}

  /* アニメーションの基点 */
  position: relative;
  overflow: hidden;
  /* ボタンの形状 */
  display: inline-block;
  text-align: center;
  /* アニメーション設定 */
  transition: ease 0.2s;

  & span {
    position: relative;
    /* 文字を背景より手前に表示 */
    z-index: 3;
    color: ${({ color }) => color};
  }

  &:hover span {
    color: ${({ backgroundColor }) => backgroundColor};
  }

  &::before {
    /* 位置調整 */
    content: '';
    position: absolute;
    ${({ preset }) => position(preset)}
    z-index: 2;
    /* 見た目 */
    background-color: ${({ backgroundColor }) => backgroundColor};
    ${({ preset }) => width(preset)}
    ${({ preset }) => height(preset)}
    /* アニメーション */
    ${({ preset, transitionDuration }) =>
      beforeAnimation(preset, transitionDuration)}
  }

  &:hover::before {
    ${({ preset }) => hoverBeforeAnimation(preset)}
    height: 100%;
    background-color: ${({ color }) => color};
  }
`

export const FlowingButton = styled.button<CharacterProps>`
  ${ResetCss.button}
  ${flowingCss}
`

export const FlowingLink = styled.a<CharacterProps>`
  ${flowingCss}
`
