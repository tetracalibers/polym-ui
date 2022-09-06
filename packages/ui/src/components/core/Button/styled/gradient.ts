import { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'

export const injectGradientStyle = css`
  ${ResetCss.button}

  /*ボタンの形状*/
  display: inline-block;
  color: #fff;
  padding: 18px 60px;

  border-radius: 30px;
  text-decoration: none;
  outline: none;
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
  /*アニメーションの指定*/
  transition: all 0.3s ease-out;

  &:hover {
    color: #fff;
    background-position: 99% 50%;
  }
`
