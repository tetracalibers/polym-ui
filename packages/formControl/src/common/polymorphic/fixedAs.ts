import { ComponentPropsWithoutRef } from 'react'
import { PolymorphicRef } from './standard'

export type InputComponentProp<Props = {}> = Props &
  ComponentPropsWithoutRef<'input'>

export type InputComponentPropWithRef<Props = {}> = InputComponentProp<Props> &
  PolymorphicRef<'input'>
