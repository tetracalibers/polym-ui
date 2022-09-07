import _ from 'lodash'
import {
  ForwardedRef,
  ReactNode,
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
} from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { CheckSemanticAnchor } from '../Anchor/styled'
import {
  AnchorCharacterProps,
  defaultAnchorCharacterProps,
} from './model/anchor'
import { ButtonCharacterProps } from './model/button'
import { defaultButtonCoreProps } from './model/props'
import {
  BurglarizeStyleProps,
  defaultBurglarizeStyleProps,
  defaultFlowGradientStyleProps,
  defaultScaleGradientStyleProps,
  defaultToFillGradientStyleProps,
  FlowGradientStyleProps,
  ScaleGradientStyleProps,
  ToFillGradientStyleProps,
} from './model/style'
import { CheckSemanticButton } from './styled'
import { injectBurglarizeStyle } from './styled/burglarize'
import { injectFlowGradientStyle } from './styled/flowGradient'
import { injectScaleGradientStyle } from './styled/scaleGradient'
import { injectToFillGradientStyle } from './styled/toFillGradient'

/* -------------------------------------------- */
/* CORE                                         */
/* -------------------------------------------- */

/* button ------------------------------------- */

export type ButtonCoreProps = {
  ref?: ForwardedRef<HTMLButtonElement>
  children: ReactNode
} & ButtonCharacterProps &
  Omit<ComponentPropsWithoutRef<'button'>, 'children' | 'type'>

export const Button = ({
  children,
  ref,
  type = defaultButtonCoreProps.type,
  ...props
}: ButtonCoreProps) => {
  return (
    <CheckSemanticButton {...props} ref={ref} type={type ?? 'button'}>
      {children}
    </CheckSemanticButton>
  )
}

/* anchor ------------------------------------- */

export type AnchorCoreProps = {
  ref: ForwardedRef<HTMLAnchorElement>
  children: ReactNode
} & AnchorCharacterProps &
  Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'href'>

export const Anchor = ({
  children,
  ref,
  href = defaultAnchorCharacterProps.href,
  openInNewTab = defaultAnchorCharacterProps.openInNewTab,
  ...props
}: AnchorCoreProps) => {
  const openControl = openInNewTab
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {}

  return (
    <CheckSemanticAnchor {...props} ref={ref} href={href} {...openControl}>
      {children}
    </CheckSemanticAnchor>
  )
}

/* -------------------------------------------- */
/* WITH STYLE                                   */
/* -------------------------------------------- */

/* flowGradient ------------------------------- */

type FlowGradientClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> =
  CORE & FlowGradientStyleProps

export const getFlowGradientClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectFlowGradientStyle}
  `
  return forwardRef(
    ({
      children,
      ref,
      bgColor01 = defaultFlowGradientStyleProps.bgColor01,
      bgColor02 = defaultFlowGradientStyleProps.bgColor02,
      bgColor03 = defaultFlowGradientStyleProps.bgColor03,
      bgColor04 = defaultFlowGradientStyleProps.bgColor04,
      slope = defaultFlowGradientStyleProps.slope,
      borderRadiusV = defaultFlowGradientStyleProps.borderRadiusV,
      borderRadiusU = defaultFlowGradientStyleProps.borderRadiusU,
      paddingXU = defaultFlowGradientStyleProps.paddingXU,
      paddingYU = defaultFlowGradientStyleProps.paddingYU,
      paddingXV = defaultFlowGradientStyleProps.paddingXV,
      paddingYV = defaultFlowGradientStyleProps.paddingYV,
      duration = defaultFlowGradientStyleProps.duration,
      ...props
    }: FlowGradientClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            bgColor01,
            bgColor02,
            bgColor03,
            bgColor04,
            slope,
            borderRadiusV,
            borderRadiusU,
            paddingXU,
            paddingYU,
            paddingXV,
            paddingYV,
            duration,
          }}
        >
          <Component {...props} ref={ref}>
            {children}
          </Component>
        </ThemeProvider>
      )
    }
  )
}

Button.FlowGradient = getFlowGradientClickElement<ButtonCoreProps>(Button)
Anchor.FlowGradient = getFlowGradientClickElement<AnchorCoreProps>(Anchor)

/* scaleGradient ------------------------------ */

type ScaleGradientClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> =
  CORE & ScaleGradientStyleProps

export const getScaleGradientClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectScaleGradientStyle}
  `
  return forwardRef(
    ({
      children,
      ref,
      bgColor01 = defaultScaleGradientStyleProps.bgColor01,
      bgColor02 = defaultScaleGradientStyleProps.bgColor02,
      slope = defaultScaleGradientStyleProps.slope,
      borderRadiusV = defaultScaleGradientStyleProps.borderRadiusV,
      borderRadiusU = defaultScaleGradientStyleProps.borderRadiusU,
      paddingXU = defaultScaleGradientStyleProps.paddingXU,
      paddingYU = defaultScaleGradientStyleProps.paddingYU,
      paddingXV = defaultScaleGradientStyleProps.paddingXV,
      paddingYV = defaultScaleGradientStyleProps.paddingYV,
      duration = defaultScaleGradientStyleProps.duration,
      hoverEffect = defaultScaleGradientStyleProps.hoverEffect,
      scaleFactor = defaultScaleGradientStyleProps.scaleFactor,
      shadowOffsetXV = defaultScaleGradientStyleProps.shadowOffsetXV,
      shadowOffsetYV = defaultScaleGradientStyleProps.shadowOffsetYV,
      shadowBlurV = defaultScaleGradientStyleProps.shadowBlurV,
      shadowOffsetXU = defaultScaleGradientStyleProps.shadowOffsetXU,
      shadowOffsetYU = defaultScaleGradientStyleProps.shadowOffsetYU,
      shadowBlurU = defaultScaleGradientStyleProps.shadowBlurU,
      shadowColor = defaultScaleGradientStyleProps.shadowColor,
      ...props
    }: ScaleGradientClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            bgColor01,
            bgColor02,
            slope,
            borderRadiusV,
            borderRadiusU,
            paddingXU,
            paddingYU,
            paddingXV,
            paddingYV,
            duration,
            hoverEffect,
            scaleFactor,
            shadowOffsetXV,
            shadowOffsetYV,
            shadowBlurV,
            shadowOffsetXU,
            shadowOffsetYU,
            shadowBlurU,
            shadowColor,
          }}
        >
          <Component {...props} ref={ref}>
            {children}
          </Component>
        </ThemeProvider>
      )
    }
  )
}

Button.ScaleGradient = getScaleGradientClickElement<ButtonCoreProps>(Button)
Anchor.ScaleGradient = getScaleGradientClickElement<AnchorCoreProps>(Anchor)

/* toFillGradient ----------------------------- */

type ToFillGradientClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> =
  CORE & ToFillGradientStyleProps

export const getToFillGradientClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectToFillGradientStyle}
  `
  return forwardRef(
    ({
      children,
      ref,
      bgColor01 = defaultToFillGradientStyleProps.bgColor01,
      bgColor02 = defaultToFillGradientStyleProps.bgColor02,
      bgColor03 = defaultToFillGradientStyleProps.bgColor03,
      slope = defaultToFillGradientStyleProps.slope,
      borderRadiusV = defaultToFillGradientStyleProps.borderRadiusV,
      borderRadiusU = defaultToFillGradientStyleProps.borderRadiusU,
      paddingXU = defaultToFillGradientStyleProps.paddingXU,
      paddingYU = defaultToFillGradientStyleProps.paddingYU,
      paddingXV = defaultToFillGradientStyleProps.paddingXV,
      paddingYV = defaultToFillGradientStyleProps.paddingYV,
      duration = defaultToFillGradientStyleProps.duration,
      shadowOffsetXV = defaultToFillGradientStyleProps.shadowOffsetXV,
      shadowOffsetYV = defaultToFillGradientStyleProps.shadowOffsetYV,
      shadowBlurV = defaultToFillGradientStyleProps.shadowBlurV,
      shadowOffsetXU = defaultToFillGradientStyleProps.shadowOffsetXU,
      shadowOffsetYU = defaultToFillGradientStyleProps.shadowOffsetYU,
      shadowBlurU = defaultToFillGradientStyleProps.shadowBlurU,
      shadowColor = defaultToFillGradientStyleProps.shadowColor,
      borderWidthU = defaultToFillGradientStyleProps.borderWidthU,
      borderWidthV = defaultToFillGradientStyleProps.borderWidthV,
      borderColor = defaultToFillGradientStyleProps.borderColor,
      borderStyle = defaultToFillGradientStyleProps.borderStyle,
      afterColor = defaultToFillGradientStyleProps.afterColor,
      ...props
    }: ToFillGradientClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            bgColor01,
            bgColor02,
            bgColor03,
            slope,
            borderRadiusV,
            borderRadiusU,
            paddingXU,
            paddingYU,
            paddingXV,
            paddingYV,
            duration,
            shadowOffsetXV,
            shadowOffsetYV,
            shadowBlurV,
            shadowOffsetXU,
            shadowOffsetYU,
            shadowBlurU,
            shadowColor,
            borderColor,
            borderStyle,
            borderWidthU,
            borderWidthV,
            afterColor,
          }}
        >
          <Component {...props} ref={ref}>
            {children}
          </Component>
        </ThemeProvider>
      )
    }
  )
}

Button.ToFillGradient = getToFillGradientClickElement<ButtonCoreProps>(Button)
Anchor.ToFillGradient = getToFillGradientClickElement<AnchorCoreProps>(Anchor)

/* burglarize --------------------------------- */

type BurglarizeClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> =
  CORE & BurglarizeStyleProps

export const getBurglarizeClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectBurglarizeStyle}
  `

  return forwardRef(
    ({
      children,
      ref,
      pushTo = defaultBurglarizeStyleProps.pushTo,
      color = defaultBurglarizeStyleProps.color,
      bgColor = defaultBurglarizeStyleProps.bgColor,
      borderRadiusU = defaultBurglarizeStyleProps.borderRadiusU,
      borderRadiusV = defaultBurglarizeStyleProps.borderRadiusV,
      offset = defaultBurglarizeStyleProps.offset,
      paddingXU = defaultBurglarizeStyleProps.paddingXU,
      paddingYU = defaultBurglarizeStyleProps.paddingYU,
      paddingXV = defaultBurglarizeStyleProps.paddingXV,
      paddingYV = defaultBurglarizeStyleProps.paddingYV,
      duration = defaultBurglarizeStyleProps.duration,
      ...props
    }: BurglarizeClickProps<CORE>) => {
      return (
        <ThemeProvider
          theme={{
            pushTo,
            color,
            bgColor,
            borderRadiusU,
            borderRadiusV,
            paddingXV,
            paddingXU,
            paddingYV,
            paddingYU,
            duration,
            offset,
          }}
        >
          <Component {...props} ref={ref}>
            <span>{children}</span>
          </Component>
        </ThemeProvider>
      )
    }
  )
}

Button.Burglarize = getBurglarizeClickElement<ButtonCoreProps>(Button)
Anchor.Burglarize = getBurglarizeClickElement<AnchorCoreProps>(Anchor)
