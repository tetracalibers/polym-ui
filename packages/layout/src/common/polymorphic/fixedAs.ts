import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { PolymorphicRef } from './standard'

/* -------------------------------------------- */
/* INPUT                                        */
/* -------------------------------------------- */

export type InputComponentProp<Props = {}> = Props &
  ComponentPropsWithoutRef<'input'>

export type InputComponentPropWithRef<Props = {}> = InputComponentProp<Props> &
  PolymorphicRef<'input'>

/* -------------------------------------------- */
/* TEXTAREA                                     */
/* -------------------------------------------- */

export type TextAreaComponentProp<Props = {}> = PropsWithChildren<Props> &
  ComponentPropsWithoutRef<'textarea'>

export type TextAreaComponentPropWithRef<Props = {}> =
  TextAreaComponentProp<Props> & PolymorphicRef<'textarea'>

/* -------------------------------------------- */
/* DIV                                          */
/* -------------------------------------------- */

export type DivComponentProp<Props = {}> = PropsWithChildren<Props> &
  ComponentPropsWithoutRef<'div'>

export type DivComponentPropWithRef<Props = {}> = DivComponentProp<Props> &
  PolymorphicRef<'div'>