import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import {
  defaultProps as _defaultProps,
  RotatingButtonProps,
} from '../model/props'
import { RotatingStyled } from '../styled/RotatingStyled'

type ThisProps = Omit<
  ComponentPropsWithoutRef<'button'> & {
    beforeChild: ReactNode
    afterChild: ReactNode
  } & RotatingButtonProps,
  'children'
>

const defaultProps = {
  ..._defaultProps,
  beforeChild: '',
  afterChild: '',
}

const RotatingButton: FC<ThisProps> = (
  { ...props }: ThisProps = { ...defaultProps }
) => {
  return (
    <RotatingStyled {...props}>
      <span>{props.beforeChild}</span>
      <span>{props.afterChild}</span>
    </RotatingStyled>
  )
}

export default RotatingButton
