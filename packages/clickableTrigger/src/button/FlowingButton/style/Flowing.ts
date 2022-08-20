import { match } from 'ts-pattern'
import styled, { css, keyframes } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { FlowingButtonProps } from '../model/props'

const diagonalKeyframes = keyframes`
  100% {
    left: -10%;
  }
`

const transform = (preset: FlowingButtonProps['preset']) => {
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

const transitionProperty = (preset: FlowingButtonProps['preset']) => {
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

const transitionDuration = (preset: FlowingButtonProps['preset']) => {
  return match(preset)
    .with('from-left', 'from-right', () => {
      return css`
        transition-duration: 0.6s;
      `
    })
    .with(
      'up',
      'down',
      'center-to-horizontal',
      'center-to-vertical',
      'center-to-corner',
      () => {
        return css`
          transition-duration: 0.3s;
        `
      }
    )
    .otherwise(() => '')
}

const width = (preset: FlowingButtonProps['preset']) => {
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

const height = (preset: FlowingButtonProps['preset']) => {
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

const hoverBeforeAnimation = (preset: FlowingButtonProps['preset']) => {
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

const position = (preset: FlowingButtonProps['preset']) => {
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

const beforeAnimation = (preset: FlowingButtonProps['preset']) => {
  return match(preset)
    .with('diagonal', () => {
      return css`
        transform: skewX(-25deg);
      `
    })
    .otherwise(() => {
      return css`
        ${transitionProperty(preset)}
        ${transitionDuration(preset)}
        transition-timing-function: cubic-bezier(0.8, 0, 0.2, 1);
        transition-delay: 0s;
        ${transform(preset)}
        ${transformOrigin(preset)}
      `
    })
}

export const FlowingStyled = styled.button<FlowingButtonProps>`
  ${ResetCss.button}

  /* アニメーションの起点 */
  position: relative;
  overflow: hidden;
  /* ボタンの形状 */
  text-decoration: none;
  display: inline-block;
  /* ボーダー */
  border: 1px solid #555;
  padding: 10px 30px;
  text-align: center;
  outline: none;
  /* アニメーション設定 */
  transition: ease 0.2s;

  & span {
    position: relative;
    /* 文字を背景より手前に表示 */
    z-index: 3;
    color: #333;
  }

  &:hover span {
    color: #fff;
  }

  &::before {
    /* 位置調整 */
    content: '';
    position: absolute;
    ${({ preset }) => position(preset)}
    z-index: 2;
    /* 見た目 */
    background-color: '#333';
    ${({ preset }) => width(preset)}
    ${({ preset }) => height(preset)}
    /* アニメーション */
    ${({ preset }) => beforeAnimation(preset)}
  }

  &:hover::before {
    ${({ preset }) => hoverBeforeAnimation(preset)}
    height: 100%;
    background-color: #333;
  }
`
