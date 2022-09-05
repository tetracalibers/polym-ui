import _ from 'lodash'
import {
  ForwardedRef,
  ReactNode,
  ComponentPropsWithoutRef,
  ElementType,
  forwardRef,
} from 'react'
import styled from 'styled-components'
import { CheckSemanticAnchor } from '../Anchor/styled'
import {
  AnchorCharacterProps,
  defaultAnchorCharacterProps,
} from './model/anchor'
import { ButtonCharacterProps } from './model/button'
import { defaultButtonCoreProps } from './model/props'
import { CheckSemanticButton } from './styled'
import { injectGradientStyle } from './styled/gradient'

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

type GradientClickProps<CORE extends ButtonCoreProps | AnchorCoreProps> = CORE

export const getGradientClickElement = <
  CORE extends ButtonCoreProps | AnchorCoreProps
>(
  CoreComponent: ElementType
) => {
  const Component = styled(CoreComponent)`
    ${injectGradientStyle}
  `

  return forwardRef(({ children, ref, ...props }: GradientClickProps<CORE>) => {
    return (
      <Component {...props} ref={ref}>
        {children}
      </Component>
    )
  })
}

Button.Gradient = getGradientClickElement<ButtonCoreProps>(Button)
Anchor.Gradient = getGradientClickElement<AnchorCoreProps>(Anchor)
