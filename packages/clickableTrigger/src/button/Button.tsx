import { ReactNode, FC, ComponentPropsWithoutRef } from 'react'
import {
  AnimationCssProps,
  ButtonCssProps,
  provideCssProps,
  Pseudo,
} from 'styled-utility-first'
import styled from 'styled-components'
import usePseudoStyleContext from './PseudoStyleProvider'

const PseudoStyleProvider = usePseudoStyleContext('button')

type UseCssProps = ButtonCssProps & AnimationCssProps

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & UseCssProps & {
    [pseudo in Pseudo]?: UseCssProps
  }

const StyledButton = styled.button<UseCssProps>`
  ${provideCssProps.as('button')}
`

const Button: FC<ButtonProps> = ({
  children,
  hover,
  focus,
  ...props
}: ButtonProps) => {
  return (
    <PseudoStyleProvider pseudo='focus' {...focus}>
      <PseudoStyleProvider pseudo='hover' {...hover}>
        <StyledButton {...props}>{children}</StyledButton>
      </PseudoStyleProvider>
    </PseudoStyleProvider>
  )
}

export default Button
