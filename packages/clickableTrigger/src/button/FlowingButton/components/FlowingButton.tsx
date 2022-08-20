import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { FlowingStyled } from '../style/Flowing'
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
    <FlowingStyled preset={preset} {...props}>
      <span>{children}</span>
    </FlowingStyled>
  )
}

export default FlowingButton
