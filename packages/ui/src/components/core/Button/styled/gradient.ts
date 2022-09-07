import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { GradientStyleProps } from '../model/style'

const baseStyle = css``

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
    .with('toFill', () => toFillStyle)
    .otherwise(() => '')
}

export const injectGradientStyle = css`
  ${baseStyle}

  ${({ theme }) => injectThemeStyleAs(theme.hoverEffect)}
`
