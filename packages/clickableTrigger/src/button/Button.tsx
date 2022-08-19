import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import {
  AnimationCssProps,
  ButtonCssProps,
  provideCssProps,
  Pseudo,
} from 'styled-utility-first'
import styled, { css, CSSObject } from 'styled-components'

type UseCssProps = ButtonCssProps & AnimationCssProps

type UseCssPropsAllowPseudo = UseCssProps & {
  [pseudo in Pseudo as `${pseudo}Style`]?: CSSObject
}

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & UseCssPropsAllowPseudo

const PseudoMixin = (pseudo: Pseudo, ruleset: CSSObject) => {
  // prettier-ignore
  return css`
    &:${pseudo} {
      ${ruleset}
    }
  `
}

const StyledButton = styled.button<UseCssPropsAllowPseudo>`
  ${provideCssProps.as('button')}
  ${({ hoverStyle }) =>
    hoverStyle !== undefined && PseudoMixin('hover', hoverStyle)}
  ${({ focusStyle }) =>
    focusStyle !== undefined && PseudoMixin('focus', focusStyle)}
`

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
