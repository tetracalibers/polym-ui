import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import {
  AnimationCssProps,
  ButtonCssProps,
  provideCssProps,
} from 'styled-utility-first'
import styled from 'styled-components'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & ButtonCssProps &
  AnimationCssProps

const BaseButton = styled.button<ButtonCssProps>`
  ${provideCssProps.as('button')}
`

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <BaseButton {...props}>{children}</BaseButton>
}

export default Button
