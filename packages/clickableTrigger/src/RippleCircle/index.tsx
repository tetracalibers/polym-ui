import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import { RippleCircleProps, defaultProps as _defaultProps } from './model/props'
import { RippleStyled } from './styled/RippleCircle'

type ThisProps = ComponentPropsWithoutRef<'button'> & {
  children: ReactNode
} & RippleCircleProps

const defaultProps = {
  ..._defaultProps,
  children: '',
}

const RippleCircle: FC<ThisProps> = (
  { ...props }: ThisProps = { ...defaultProps }
) => {
  return (
    <RippleStyled {...props}>
      <span>{props.children}</span>
    </RippleStyled>
  )
}

export default RippleCircle
