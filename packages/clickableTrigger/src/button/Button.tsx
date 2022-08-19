import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import {
  AnimationCssProps,
  ButtonCssProps,
  provideCssProps,
  SvgCssProps,
  TransformCssProps,
} from 'styled-utility-first'
import styled from 'styled-components'

export type UseCssProps = ButtonCssProps &
  AnimationCssProps &
  TransformCssProps &
  SvgCssProps

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & UseCssProps

const StyledButton = styled.button<UseCssProps>`
  ${provideCssProps.as('button')}
  ${provideCssProps.as('animation')}
  ${provideCssProps.as('transform')}
  ${provideCssProps.as('svg')}
  ${provideCssProps.pseudo}
`

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
