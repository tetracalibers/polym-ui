import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { FlowingStyled } from '../styled/FlowingStyled'
import { defaultProps, FlowingButtonProps } from '../model/props'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & FlowingButtonProps

const FlowingButton: FC<ThisProps> = (
  { ...props }: ThisProps = { ...defaultProps, children: '' }
) => {
  return (
    <FlowingStyled {...props}>
      <span>{props.children}</span>
    </FlowingStyled>
  )
}

export default FlowingButton
