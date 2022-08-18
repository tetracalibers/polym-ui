import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import {
  AnimationCssProps,
  ButtonCssProps,
  provideCssProps,
} from 'styled-utility-first'
import styled from 'styled-components'

type CssProps = ButtonCssProps & AnimationCssProps

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & CssProps

const BaseButton = styled.button<CssProps>`
  ${provideCssProps.as('button')}
`

console.log(BaseButton)

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <BaseButton {...props}>{children}</BaseButton>
}

export default Button
