import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { Core, injectDashedLineStyle, injectSolidLineStyle } from './styled'

/* -------------------------------------------- */
/* CORE                                         */
/* -------------------------------------------- */

type TextCoreProps = {
  children: string
} & Omit<ComponentPropsWithoutRef<'span'>, 'children'>

export const Text = ({ children, ...props }: TextCoreProps) => {
  return <Core {...props}>{children}</Core>
}

/* -------------------------------------------- */
/* SOLIDLINE                                    */
/* -------------------------------------------- */

type SolidLineTextProps = TextCoreProps

const getSolidLineText = (CoreComponent: typeof Text) => {
  const Component = styled(CoreComponent)`
    ${injectSolidLineStyle}
  `
  return ({ children, ...props }: SolidLineTextProps) => {
    return <Component {...props}>{children}</Component>
  }
}

Text.SolidLine = getSolidLineText(Text)

/* -------------------------------------------- */
/* DASHEDLINE                                   */
/* -------------------------------------------- */

type DashedLineProps = SolidLineTextProps

const getDashedLineText = (CoreComponent: typeof Text) => {
  const Component = styled(CoreComponent)`
    ${injectDashedLineStyle}
  `

  return ({ children, ...props }: DashedLineProps) => {
    return <Component {...props}>{children}</Component>
  }
}

Text.DashedLine = getDashedLineText(Text)
