import styled, { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { BurglarizeStyleProps } from '../model/style'

const baseStyle = css`
  ${ResetCss.button};

  ${({ theme }) => css`
    --border-radius: ${theme.borderRadiusV + theme.borderRadiusU};
    --color: ${theme.color};
    --duration: ${theme.duration}s;
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --bg-color: ${theme.bgColor};
    --offset: ${theme.offset}px;
  `}

  & {
    /*影の基点とするためrelativeを指定*/
    position: relative;
    /*ボタンの形状*/
    text-decoration: none;
    display: inline-block;
    text-align: center;
    background: transparent;
    border-radius: var(--border-radius);
    border: solid 1px var(--color);
    transition: all calc(var(--duration) * 2 / 3) ease;
  }

  /*hoverをした後のボタンの形状*/
  &:hover {
    border-color: transparent;
  }

  /*ボタンの中のテキスト*/
  & > span {
    position: relative;
    z-index: 2; /*z-indexの数値をあげて文字を背景よりも手前に表示*/
    /*テキストの形状*/
    display: block;
    padding: var(--paddingY) var(--paddingX);
    background-color: var(--bg-color);
    border-radius: var(--border-radius);
    color: var(--color);
    /*アニメーションの指定*/
    transition: all var(--duration) ease;
  }

  /*影の設定*/
  &::before {
    content: '';
    /*絶対配置で影の位置を決める*/
    position: absolute;
    z-index: -1;
    /*影の形状*/
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background-color: var(--color);
  }

  &:hover > span {
    background-color: var(--color);
    color: var(--bg-color);
  }
`

const effectByPushToAs = (pushTo: BurglarizeStyleProps['pushTo']) => {
  return match(pushTo)
    .with('bottom', () => {
      return css`
        &::before {
          top: var(--offset);
          left: 0;
        }

        &:hover > span {
          transform: translateY(var(--offset));
        }
      `
    })
    .with('right', () => {
      return css`
        &::before {
          top: var(--offset);
          left: var(--offset);
        }

        &:hover > span {
          transform: translate(var(--offset), var(--offset));
        }
      `
    })
    .with('left', () => {
      return css`
        &::before {
          top: var(--offset);
          right: var(--offset);
        }

        &:hover > span {
          transform: translate(calc(-1 * var(--offset)), var(--offset));
        }
      `
    })
    .otherwise(() => '')
}

export const injectBurglarizeStyle = css`
  ${baseStyle}
  ${({ theme }) => effectByPushToAs(theme.pushTo)}
`
