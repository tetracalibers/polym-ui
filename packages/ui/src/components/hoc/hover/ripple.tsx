import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import * as CSST from 'csstype'
import styled, { css, keyframes, ThemeProvider } from 'styled-components'
import { ElementType, forwardRef } from 'react'

/* -------------------------------------------- */
/* PROPS                                        */
/* -------------------------------------------- */

const rippleConf = {}

export type RippleStyleProps = getPropType<typeof rippleConf>

export const defaultRippleStyleProps =
  getDefaultProps<RippleStyleProps>(rippleConf)

/* -------------------------------------------- */
/* STYLE                                        */
/* -------------------------------------------- */

const variables = css`
  ${({ theme }) => css`
    --duration: ${theme.duration}s;
    --wave-thickness: ${theme.waveThickness}px;
    --wave-color: ${theme.waveColor};
    --wave-scale: ${theme.waveScale};
  `}
`

export const hoverRippleStyle = css`
  ${variables}

  && {
    /*波紋の基点とするためrelativeを指定*/
    position: relative;
    /*はみ出す波紋を隠す*/
    overflow: hidden;
  }

  &&:after {
    content: '';
    /*絶対配置で波紋位置を決める*/
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /*波紋の形状*/
    background: radial-gradient(circle, #fff 10%, transparent 10%) no-repeat 50%;
    transform: scale(10, 10);
    /*はじめは透過0に*/
    opacity: 0;
    /*アニメーションの設定*/
    transition: transform 0.3s, opacity 1s;
  }

  &&:hover::after,
  &&:active::after {
    transform: scale(0, 0);
    transition: 0s;
    opacity: 0.3;
  }
`

/* -------------------------------------------- */
/* HOC                                          */
/* -------------------------------------------- */

export const withHoverRipple = (CoreComponent: ElementType) => {
  const Component = styled(CoreComponent)`
    ${hoverRippleStyle}
  `

  return <Props extends {} = {}>({ ...props }: RippleStyleProps & Props) => {
    return (
      <ThemeProvider theme={{}}>
        <Component {...props} />
      </ThemeProvider>
    )
  }
}
