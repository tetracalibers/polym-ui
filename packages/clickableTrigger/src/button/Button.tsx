import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import {
  AnimationCssProps,
  ButtonCssProps,
  provideCssProps,
  PseudoProps,
  pseudoMixin,
} from 'styled-utility-first'
import styled from 'styled-components'

type BasicCssProps = ButtonCssProps & AnimationCssProps
type CssProps = PseudoProps<BasicCssProps> & BasicCssProps

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & CssProps

const BaseButton = styled.button<ButtonCssProps>`
  ${provideCssProps.as('button')}
  ${pseudoMixin<BasicCssProps>()}
`

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <BaseButton {...props}>{children}</BaseButton>
}

export default Button
