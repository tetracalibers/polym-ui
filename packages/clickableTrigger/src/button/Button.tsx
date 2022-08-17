import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import { ButtonCssProps, provideCssProps } from 'styled-utility-first'
import styled from 'styled-components'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
}

const BaseButton = styled.button<ButtonCssProps>`
  ${provideCssProps.as('button')}
`

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  return <BaseButton {...props}>{children}</BaseButton>
}

export default Button
