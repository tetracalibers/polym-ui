import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import {
  AnimationCssProps,
  ButtonCssProps,
  provideCssProps,
  TransformCssProps,
} from 'styled-utility-first'
import styled from 'styled-components'

export type UseCssProps = ButtonCssProps & AnimationCssProps & TransformCssProps

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & UseCssProps

const StyledButton = styled.button<UseCssProps>`
  ${provideCssProps.as('button')}
  ${provideCssProps.as('animation')}
  ${provideCssProps.as('transform')}
  ${provideCssProps.pseudo}
`

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
