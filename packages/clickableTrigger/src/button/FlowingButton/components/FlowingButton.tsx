import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { FromSideStyled } from '../style/FromSide'
import { FlowingButtonProps } from '../model/props'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & FlowingButtonProps

const FlowingButton: FC<ThisProps> = ({
  children,
  preset,
  ...props
}: ThisProps) => {
  return (
    <FromSideStyled preset={preset} {...props}>
      <span>{children}</span>
    </FromSideStyled>
  )
}

export default FlowingButton
