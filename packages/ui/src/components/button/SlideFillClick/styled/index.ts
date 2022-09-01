import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, ResetCss } from 'styled-utility-first'
import { Button } from '../../../core/Button'
import { Anchor } from '../../../core/Anchor'

const beforeLine = (slide: CharacterProps['slide']) => {
  return match(slide)
    .with('FromCenter', () => {
      return css`
        &&::before,
        &&::after {
          transform: scale(0, 1);
          transform-origin: center;
          width: 100%;
          height: var(--animate-line-thickness);
        }

        /*上線*/
        &&::before {
          left: 0;
          top: calc(-1 * var(--animate-line-thickness) * 2 / 3);
        }

        /*下線*/
        &&::after {
          left: 0;
          bottom: calc(-1 * var(--animate-line-thickness) * 2 / 3);
        }
      `
    })
    .with('Down', () => {
      return css`
        &&::before,
        &&::after {
          width: var(--animate-line-thickness);
          height: 0;
        }

        /*左線*/
        &&::before {
          left: calc(-1 * var(--animate-line-thickness) * 2 / 3);
          top: 0;
        }

        /*右線*/
        &&::after {
          right: calc(-1 * var(--animate-line-thickness) * 2 / 3);
          top: 0;
        }
      `
    })
    .with('Up', () => {
      return css`
        &&::before,
        &&::after {
          width: var(--animate-line-thickness);
          height: 0;
        }

        /*左線*/
        &&::before {
          left: calc(-1 * var(--animate-line-thickness) * 2 / 3);
          bottom: 0;
        }

        /*右線*/
        &&::after {
          right: calc(-1 * var(--animate-line-thickness) * 2 / 3);
          bottom: 0;
        }
      `
    })
    .with('LtoR', () => {
      return css`
        &&::before,
        &&::after {
          height: var(--animate-line-thickness);
          width: 0;
        }

        /*左上線*/
        &&::before {
          top: calc(-1 * var(--animate-line-thickness) * 2 / 3);
          left: 0;
        }

        /*左下線*/
        &&::after {
          bottom: calc(-1 * var(--animate-line-thickness) * 2 / 3);
          left: 0;
        }
      `
    })
    .with('RtoL', () => {
      return css`
        &&::before,
        &&::after {
          height: var(--animate-line-thickness);
          width: 0;
        }

        /*右上線*/
        &&::before {
          top: calc(-1 * var(--animate-line-thickness) * 2 / 3);
          right: 0;
        }

        /*右下線*/
        &&::after {
          bottom: calc(-1 * var(--animate-line-thickness) * 2 / 3);
          right: 0;
        }
      `
    })
    .otherwise(() => '')
}

const afterLine = (slide: CharacterProps['slide']) => {
  return match(slide)
    .with('FromCenter', () => {
      return css`
        transform: scale(1, 1);
      `
    })
    .with('Down', 'Up', () => {
      return css`
        height: 100%;
      `
    })
    .with('LtoR', 'RtoL', () => {
      return css`
        width: 100%;
      `
    })
    .otherwise(() => '')
}

const beforeBg = (slide: CharacterProps['slide']) => {
  return match(slide)
    .with('FromCenter', () => {
      return css`
        transform: scale(0, 1);
        transform-origin: center;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
      `
    })
    .with('Down', () => {
      return css`
        left: 0;
        top: 0;
        width: 100%;
        height: 0;
      `
    })
    .with('Up', () => {
      return css`
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
      `
    })
    .with('LtoR', () => {
      return css`
        left: 0;
        bottom: 0;
        height: 100%;
        width: 0;
      `
    })
    .with('RtoL', () => {
      return css`
        right: 0;
        bottom: 0;
        height: 100%;
        width: 0;
      `
    })
    .otherwise(() => '')
}

const afterBg = (slide: CharacterProps['slide']) => {
  return match(slide)
    .with('FromCenter', () => {
      return css`
        width: 100%;
        transform: scale(1, 1);
      `
    })
    .with('Down', 'Up', () => {
      return css`
        height: 100%;
      `
    })
    .with('LtoR', 'RtoL', () => {
      return css`
        width: 100%;
      `
    })
    .otherwise(() => '')
}

// 線 -> 背景 -> テキスト

const variables = css`
  ${({ theme }) => {
    return css`
      /* effect ------------------------------------- */
      --animated-bg-color: ${theme.animatedBgColor};
      --animated-color: ${theme.animatedColor};
      --animate-line-thickness: ${theme.animateLineThickness}px;
      --duration: ${theme.duration}s;
      /* css ---------------------------------------- */
      --bd-color: ${theme.borderColor};
      --bd-width: ${theme.borderWidth}px;
      --paddingY: ${theme.paddingYV + theme.paddingYU};
      --paddingX: ${theme.paddingXV + theme.paddingXU};
    `
  }}
`

const clickareaStyle = css`
  ${variables}

  /*線の基点とするためrelativeを指定*/
  position: relative;
  /*ボタンの形状*/
  display: inline-block;
  padding: var(--paddingY) var(--paddingX);
  color: var(--animated-bg-color);
  border: var(--bd-width) solid var(--bd-color);
  text-decoration: none;
  outline: none;

  &:hover {
    color: var(--animated-color);
    border-color: transparent;
    /*色の変化を遅らせる*/
    transition-delay: var(--duration);
  }

  /*背景の設定*/
  &::before {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    z-index: -1;
    /*背景の形状*/
    background-color: var(--animated-bg-color);
    /*アニメーションの設定*/
    transition: all calc(var(--duration) / 2);
    ${({ theme }) => beforeBg(theme.slide)}
  }

  /*hoverをすると背景が伸びる*/
  &:hover::before {
    /*0.4秒遅れてアニメーション*/
    transition-delay: calc(var(--duration) / 2 + (var(--duration) / 6));
    ${({ theme }) => afterBg(theme.slide)}
  }
`

export const STyledButton = styled(Button)`
  ${ResetCss.button}
  ${clickareaStyle}
`

export const STyledAnchor = styled(Anchor)`
  ${clickareaStyle}
`

export const ChildrenWrapper = styled.span`
  && {
    display: block;
    z-index: 2;
  }

  /*線の設定*/
  &&::before,
  &&::after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    /*線の形状*/
    background-color: var(--animated-bg-color);
    /*アニメーションの設定*/
    transition: all calc(var(--duration) / 2);
  }

  ${({ theme }) => beforeLine(theme.slide)}

  /*hoverをすると線が伸びる*/
  ${STyledAnchor}:hover &&::before,
  ${STyledAnchor}:hover &&::after,
  ${STyledButton}:hover &&::before,
  ${STyledButton}:hover &&::after {
    ${({ theme }) => afterLine(theme.slide)}
  }
`
