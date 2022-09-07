import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { GradientStyleProps } from '../model/style'

const baseStyle = css``

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
    .with('shrink', () => shrinkStyle)
    .with('expand', () => expandStyle)
    .with('toFill', () => toFillStyle)
    .otherwise(() => '')
}

export const injectGradientStyle = css`
  ${baseStyle}

  ${({ theme }) => injectThemeStyleAs(theme.hoverEffect)}
`
