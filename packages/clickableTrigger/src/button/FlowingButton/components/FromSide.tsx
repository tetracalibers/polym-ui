import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { FromFourSidedProps } from '../model/props'
import { FromFourSidedStyled } from '../style/FromSide'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & FromFourSidedProps

const FlowBackFromFourSidedButton: FC<ThisProps> = ({
  children,
  from,
  ...props
}: ThisProps) => {
  return (
    <FromFourSidedStyled from={from} {...props}>
      <span>{children}</span>
    </FromFourSidedStyled>
  )
}

export default FlowBackFromFourSidedButton
