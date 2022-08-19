import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import {
  AnimationCssProps,
  ButtonCssProps,
  provideCssProps,
  Pseudo,
} from 'styled-utility-first'
import styled from 'styled-components'
import OnInteraction from './OnInteraction'

type UseCssProps = ButtonCssProps & AnimationCssProps

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
  pseudo?: {
    [pseu in Pseudo]?: {
      [property in keyof UseCssProps]?: UseCssProps[property]
    }
  }
} & UseCssProps

const StyledButton = styled.button<UseCssProps>`
  ${provideCssProps.as('button')}
`

const Button: FC<ButtonProps> = ({ children, ...props }: ButtonProps) => {
  const { pseudo } = props
  return pseudo === undefined ? (
    <StyledButton {...props}>{children}</StyledButton>
  ) : (
    <OnInteraction cssCategory='button' {...pseudo}>
      <StyledButton {...props}>{children}</StyledButton>
    </OnInteraction>
  )
}

export default Button
