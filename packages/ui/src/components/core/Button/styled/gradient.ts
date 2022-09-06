import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { match } from 'ts-pattern'
import { GradientStyleProps } from '../model/style'

const baseStyle = css`
  ${ResetCss.button}

  /*ボタンの形状*/
  display: inline-block;
  color: #fff;
  padding: 18px 60px;
  border-radius: 30px;
  text-decoration: none;
  outline: none;
  /*アニメーションの指定*/
  transition: all 0.3s ease-out;
`

const flowStyle = css`
  /*背景の色と形状*/
  background: linear-gradient(
    270deg,
    #3bade3 0%,
    #576fe6 25%,
    #9844b7 51%,
    #ff357f 100%
  );
  background-position: 1% 50%;
  background-size: 200% auto;

  &:hover {
    color: #fff;
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

const injectThemeStyleAs = (type: GradientStyleProps['hoverEffect']) => {
  return match(type)
    .with('flow', () => flowStyle)
    .with('shrink', () => shrinkStyle)
    .otherwise(() => '')
}

export const injectGradientStyle = css`
  ${baseStyle}

  ${({ theme }) => injectThemeStyleAs(theme.hoverEffect)}
`
