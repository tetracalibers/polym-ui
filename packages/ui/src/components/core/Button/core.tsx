import _ from 'lodash'
import { ForwardedRef, ReactNode, ComponentPropsWithoutRef } from 'react'
import { CheckSemanticAnchor } from '../Anchor/styled'
import { getFlowGradientClickElement } from './flowGradient'
import {
  AnchorCharacterProps,
  defaultAnchorCharacterProps,
} from './model/anchor'
import { ButtonCharacterProps } from './model/button'
import { defaultButtonCoreProps } from './model/props'
import { getScaleGradientClickElement } from './scaleGradient'
import { CheckSemanticButton } from './styled'
import { getToFillGradientClickElement } from './toFillGradient'
import { getBurglarizeClickElement } from './burglarize'
import { getShineClickElement } from './shine'
import { getFadeWaveClickElement } from './fadeWave'

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

Button.FlowGradient = getFlowGradientClickElement<ButtonCoreProps>(Button)
Anchor.FlowGradient = getFlowGradientClickElement<AnchorCoreProps>(Anchor)

Button.ScaleGradient = getScaleGradientClickElement<ButtonCoreProps>(Button)
Anchor.ScaleGradient = getScaleGradientClickElement<AnchorCoreProps>(Anchor)

Button.ToFillGradient = getToFillGradientClickElement<ButtonCoreProps>(Button)
Anchor.ToFillGradient = getToFillGradientClickElement<AnchorCoreProps>(Anchor)

Button.Burglarize = getBurglarizeClickElement<ButtonCoreProps>(Button)
Anchor.Burglarize = getBurglarizeClickElement<AnchorCoreProps>(Anchor)

Button.Shine = getShineClickElement<ButtonCoreProps>(Button)
Anchor.Shine = getShineClickElement<AnchorCoreProps>(Anchor)

Button.FadeWave = getFadeWaveClickElement<ButtonCoreProps>(Button)
Anchor.FadeWave = getFadeWaveClickElement<AnchorCoreProps>(Anchor)
