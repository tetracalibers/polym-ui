import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { RippleButtonProps, defaultProps as _defaultProps } from './model/props'
import { RippleStyled } from './styled/RippleButton'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & RippleButtonProps

const defaultProps = {
  ..._defaultProps,
  children: '',
}

const RippleButton: FC<ThisProps> = (
  { ...props }: ThisProps = { ...defaultProps }
) => {
  return <RippleStyled {...props}>{props.children}</RippleStyled>
}

export default RippleButton
