import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { FromFourSidedProps } from '../model/props'
import { FromFourSidedStyled } from '../style/FromFourSided'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & FromFourSidedProps

const FlowBackFromFourSidedButton: FC<ThisProps> = ({
  children,
  from,
  ...props
}: ThisProps) => {
  return (
    <FromFourSidedStyled from={from} as='button' {...props}>
      <span>{children}</span>
    </FromFourSidedStyled>
  )
}

export default FlowBackFromFourSidedButton
