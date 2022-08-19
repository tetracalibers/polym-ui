import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import {
  AnimationCssProps,
  ButtonCssProps,
  provideCssProps,
} from 'styled-utility-first'
import styled from 'styled-components'

type UseCssProps = ButtonCssProps & AnimationCssProps

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & UseCssProps

const StyledButton = styled.button<UseCssProps>`
  ${provideCssProps.as('button')}
`

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
