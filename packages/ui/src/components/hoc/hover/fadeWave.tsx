import { getDefaultProps, getPropType, NotRequired } from 'react-tsx-props'
import * as CSST from 'csstype'
import styled, { css, keyframes, ThemeProvider } from 'styled-components'
import { ElementType, forwardRef } from 'react'

/* -------------------------------------------- */
/* PROPS                                        */
/* -------------------------------------------- */

const fadeWaveConf = {
  duration: NotRequired<number>(1), // s
  waveThickness: NotRequired<number>(1), // px
  waveColor: NotRequired<CSST.Property.BorderColor>('rgb(130, 177, 255)'),
  waveScale: NotRequired<number>(2), // 倍
}

export type FadeWaveStyleProps = getPropType<typeof fadeWaveConf>

export const defaultFadeWaveStyleProps =
  getDefaultProps<FadeWaveStyleProps>(fadeWaveConf)

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

const fadeWaveMotion = keyframes`
  0% {
    transform: scale(0);
  }
  99.9%, to {
    transform: scale(var(--wave-scale));
    opacity: 0;
  }
`

export const hoverFadeWaveStyle = css`
  ${variables}

  && {
    /*波紋の基点とするためrelativeを指定*/
    position: relative;
  }

  &&:hover::before {
    content: '';
    /*絶対配置で波形の位置を決める*/
    position: absolute;
    left: 30%;
    top: 0;
    /*波形の形状*/
    border: var(--wave-thickness) solid var(--wave-color);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    /*はじめは不透明*/
    opacity: 1;
    /*アニメーションの設定*/
    animation: var(--duration) ${fadeWaveMotion} forwards;
  }
`

/* -------------------------------------------- */
/* HOC                                          */
/* -------------------------------------------- */

export const withHoverFadeWave = (CoreComponent: ElementType) => {
  const Component = styled(CoreComponent)`
    ${hoverFadeWaveStyle}
  `

  return forwardRef(
    <Props extends {} = {}>({
      duration = defaultFadeWaveStyleProps.duration,
      waveThickness = defaultFadeWaveStyleProps.waveThickness,
      waveColor = defaultFadeWaveStyleProps.waveColor,
      waveScale = defaultFadeWaveStyleProps.waveScale,
      ...props
    }: FadeWaveStyleProps & Props) => {
      return (
        <ThemeProvider
          theme={{ duration, waveThickness, waveColor, waveScale }}
        >
          <Component {...props} />
        </ThemeProvider>
      )
    }
  )
}
