import { ComponentPropsWithoutRef, ReactNode } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {
  defaultTextBaseStyleProps,
  defaultTextCloudStyleProps,
  defaultTextDashedLineStyleProps,
  defaultTextGlowStyleProps,
  defaultTextSolidlineStyleProps,
  TextBaseStyleProps,
  TextCloudStyleProps,
  TextDashedLineStyleProps,
  TextFireStyleProps,
  TextGlowStyleProps,
  TextSolidlineStyleProps,
  TextWavyLineStyleProps,
} from './model/style'
import { Core } from './styled'
import { injectCloudStyle } from './styled/cloud'
import { injectDashedLineStyle } from './styled/dashedline'
import { injectFireStyle } from './styled/fire'
import { injectGlowStyle } from './styled/glow'
import { injectSolidLineStyle } from './styled/solidline'
import { injectWavyLineStyle } from './styled/wavyline'

/* -------------------------------------------- */
/* CORE                                         */
/* -------------------------------------------- */

type TextCoreProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'span'>, 'children'> &
  TextBaseStyleProps

export const Text = ({
  children,
  color = defaultTextBaseStyleProps.color,
  fontSizeV = defaultTextBaseStyleProps.fontSizeV,
  fontSizeU = defaultTextBaseStyleProps.fontSizeU,
  lineHeight = defaultTextBaseStyleProps.lineHeight,
  ...props
}: TextCoreProps) => {
  return (
    <ThemeProvider
      theme={{
        color,
        fontSizeV,
        fontSizeU,
        lineHeight,
      }}
    >
      <Core {...props}>{children}</Core>
    </ThemeProvider>
  )
}

/* -------------------------------------------- */
/* SOLIDLINE                                    */
/* -------------------------------------------- */

type SolidLineTextProps = TextCoreProps & TextSolidlineStyleProps

const getSolidLineText = (CoreComponent: typeof Text) => {
  const Component = styled(CoreComponent)`
    ${injectSolidLineStyle}
  `
  return ({
    children,
    lineColor = defaultTextSolidlineStyleProps.lineColor,
    bgColor = defaultTextSolidlineStyleProps.bgColor,
    underOffsetV = defaultTextSolidlineStyleProps.underOffsetV,
    underOffsetU = defaultTextSolidlineStyleProps.underOffsetU,
    thicknessV = defaultTextSolidlineStyleProps.thicknessV,
    thicknessU = defaultTextSolidlineStyleProps.thicknessU,
    ...props
  }: SolidLineTextProps) => {
    return (
      <ThemeProvider
        theme={{
          lineColor,
          bgColor,
          underOffsetV,
          underOffsetU,
          thicknessV,
          thicknessU,
        }}
      >
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    )
  }
}

Text.SolidLine = getSolidLineText(Text)

/* -------------------------------------------- */
/* DASHEDLINE                                   */
/* -------------------------------------------- */

type DashedLineProps = TextCoreProps & TextDashedLineStyleProps

const getDashedLineText = (CoreComponent: typeof Text) => {
  const Component = styled(CoreComponent)`
    ${injectDashedLineStyle}
  `

  return ({
    children,
    lineColor = defaultTextDashedLineStyleProps.lineColor,
    bgColor = defaultTextDashedLineStyleProps.bgColor,
    underOffsetV = defaultTextDashedLineStyleProps.underOffsetV,
    underOffsetU = defaultTextDashedLineStyleProps.underOffsetU,
    thicknessV = defaultTextDashedLineStyleProps.thicknessV,
    thicknessU = defaultTextDashedLineStyleProps.thicknessU,
    ...props
  }: DashedLineProps) => {
    return (
      <ThemeProvider
        theme={{
          lineColor,
          bgColor,
          underOffsetV,
          underOffsetU,
          thicknessV,
          thicknessU,
        }}
      >
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    )
  }
}

Text.DashedLine = getDashedLineText(Text)

/* -------------------------------------------- */
/* WAVYLINE                                     */
/* -------------------------------------------- */

type WavyLineProps = TextCoreProps & TextWavyLineStyleProps

const getWavyLineText = (CoreComponent: typeof Text) => {
  const Component = styled(CoreComponent)`
    ${injectWavyLineStyle}
  `

  return ({
    children,
    lineColor = defaultTextDashedLineStyleProps.lineColor,
    bgColor = defaultTextDashedLineStyleProps.bgColor,
    underOffsetV = defaultTextDashedLineStyleProps.underOffsetV,
    underOffsetU = defaultTextDashedLineStyleProps.underOffsetU,
    ...props
  }: WavyLineProps) => {
    return (
      <ThemeProvider theme={{ lineColor, bgColor, underOffsetV, underOffsetU }}>
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    )
  }
}

Text.WavyLine = getWavyLineText(Text)

/* -------------------------------------------- */
/* GLOW                                         */
/* -------------------------------------------- */

type GlowProps = TextCoreProps & TextGlowStyleProps

const getGlowText = (CoreComponent: typeof Text) => {
  const Component = styled(CoreComponent)`
    ${injectGlowStyle}
  `

  return ({
    children,
    duration = defaultTextGlowStyleProps.duration,
    ...props
  }: GlowProps) => {
    return (
      <ThemeProvider theme={{ duration }}>
        <Component {...props}>{children}</Component>
      </ThemeProvider>
    )
  }
}

Text.Glow = getGlowText(Text)

/* -------------------------------------------- */
/* CLOUD                                        */
/* -------------------------------------------- */

type CloudProps = TextCoreProps & TextCloudStyleProps

const getCloudText = (CoreComponent: typeof Text) => {
  const Component = styled(CoreComponent)`
    ${injectCloudStyle}
  `

  return ({ children, ...props }: CloudProps) => {
    return <Component {...props}>{children}</Component>
  }
}

Text.Cloud = getCloudText(Text)

/* -------------------------------------------- */
/* FIRE                                         */
/* -------------------------------------------- */

type FireProps = TextCoreProps & TextFireStyleProps

const getFireText = (CoreComponent: typeof Text) => {
  const Component = styled(CoreComponent)`
    ${injectFireStyle}
  `

  return ({ children, ...props }: FireProps) => {
    return <Component {...props}>{children}</Component>
  }
}

Text.Fire = getFireText(Text)
