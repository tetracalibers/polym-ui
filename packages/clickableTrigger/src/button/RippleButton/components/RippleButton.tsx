import { ComponentPropsWithoutRef, FC, ReactNode } from 'react'
import {
  RippleButtonProps,
  defaultProps as _defaultProps,
} from '../model/props'
import { TriggerClickModeStyled } from '../styled/TriggerAsClick'

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
  return (
    <TriggerClickModeStyled {...props}>{props.children}</TriggerClickModeStyled>
  )
}

export default RippleButton
