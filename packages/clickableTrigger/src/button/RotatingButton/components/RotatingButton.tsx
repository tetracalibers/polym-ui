import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { defaultProps, RotatingButtonProps } from '../model/props'
import { RotatingStyled } from '../style/RotatingStyled'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & RotatingButtonProps

const RotatingButton: FC<ThisProps> = (
  { ...props }: ThisProps = { ...defaultProps, children: '' }
) => {
  return (
    <RotatingStyled {...props}>
      <span>{props.children}</span>
    </RotatingStyled>
  )
}

export default RotatingButton
