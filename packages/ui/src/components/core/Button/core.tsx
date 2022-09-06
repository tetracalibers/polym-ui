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
  FlowGradientStyleProps,
  GradientStyleProps,
} from './model/style'
import { CheckSemanticButton } from './styled'
import { injectBurglarizeStyle } from './styled/burglarize'
import { injectFlowGradientStyle, injectGradientStyle } from './styled/gradient'

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

/* gradient ----------------------------------- */

type GradientClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> = CORE &
  GradientStyleProps

export const getGradientClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectGradientStyle}
  `

  return forwardRef(
    ({ children, ref, hoverEffect, ...props }: GradientClickProps<CORE>) => {
      return (
        <ThemeProvider theme={{ hoverEffect }}>
          <Component {...props} ref={ref}>
            {children}
          </Component>
        </ThemeProvider>
      )
    }
  )
}

Button.Gradient = getGradientClickElement<ButtonCoreProps>(Button)
Anchor.Gradient = getGradientClickElement<AnchorCoreProps>(Anchor)

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
    ({ children, ref, ...props }: FlowGradientClickProps<CORE>) => {
      return (
        <ThemeProvider theme={{}}>
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
