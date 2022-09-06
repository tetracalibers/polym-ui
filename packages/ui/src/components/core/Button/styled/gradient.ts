import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { GradientStyleProps } from '../model/style'

const baseStyle = css`
  ${ResetCss.button}

  /*ボタンの形状*/
  display: inline-block;
  text-decoration: none;
  outline: none;
  /*アニメーションの指定*/
  transition: all 0.3s ease-out;
`

export const injectFlowGradientStyle = css`
  ${baseStyle}

  ${({ theme }) => css`
    --color: ${theme.color};
    --bg-color-1: ${theme.bgColor01};
    --bg-color-2: ${theme.bgColor02};
    --bg-color-3: ${theme.bgColor03};
    --bg-color-4: ${theme.bgColor04};
    --slope: ${theme.slope}deg;
    --paddingX: ${theme.paddingXV + theme.paddingXU};
    --paddingY: ${theme.paddingYV + theme.paddingYU};
    --duration: ${theme.duration}s;
    --border-radius: ${theme.borderRadiusV + theme.borderRadiusU};
  `}

  /*背景の色と形状*/
  background: linear-gradient(
    var(--slope),
    var(--bg-color-1) 0%,
    var(--bg-color-2) 25%,
    var(--bg-color-3) 51%,
    var(--bg-color-4) 100%
  );
  background-position: 1% 50%;
  background-size: 200% auto;
  color: var(--color);
  padding: var(--paddingY) var(--paddingX);
  border-radius: var(--border-radius);
  transition: all var(--duration) ease-out;

  &:hover {
    background-position: 99% 50%;
  }
`

const shrinkStyle = css`
  /*背景の色と形状*/
  background: linear-gradient(to right, #52a0fd 0%, #00e2fa 80%, #00e2fa 100%);
  box-shadow: 0 15px 15px rgba(82, 160, 253, 0.4);

  &:hover {
    transform: scale(0.95);
  }
`

const expandStyle = css`
  /*背景色*/
  background: linear-gradient(to right, #44ea76 0%, #39fad7 80%, #39fad7 100%);

  /*hoverした際のスケールで全体を拡大し影を付ける*/
  &:hover {
    transform: scale(1.05);
    /*ボックスの影*/
    box-shadow: 0 15px 15px rgba(57, 250, 215, 0.4);
  }
`

const toFillStyle = css`
  border: 1px solid #fa6c9f;
  color: #fa6c9f;

  &:hover {
    /*ボタンの形状*/
    border-color: transparent;
    color: #fff;
    /*背景の色と形状*/
    background: linear-gradient(270deg, #fa6c9f 0%, #ffe140 50%, #ff357f 100%);
    background-size: 200% auto;
    background-position: right center;
    /*ボックスの影*/
    box-shadow: 0 5px 10px rgb(250, 108, 159, 0.4);
  }
`

const injectThemeStyleAs = (type: GradientStyleProps['hoverEffect']) => {
  return match(type)
    .with('flow', () => injectFlowGradientStyle)
    .with('shrink', () => shrinkStyle)
    .with('expand', () => expandStyle)
    .with('toFill', () => toFillStyle)
    .otherwise(() => '')
}

export const injectGradientStyle = css`
  ${baseStyle}

  ${({ theme }) => injectThemeStyleAs(theme.hoverEffect)}
`
