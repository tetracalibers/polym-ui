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
/* SELECT                                       */
/* -------------------------------------------- */

export type SelectComponentProp<Props = {}> = PropsWithChildren<Props> &
  ComponentPropsWithoutRef<'select'>

export type SelectComponentPropWithRef<Props = {}> =
  SelectComponentProp<Props> & PolymorphicRef<'select'>

/* -------------------------------------------- */
/* TABLE                                        */
/* -------------------------------------------- */

export type TableComponentProp<Props = {}> = PropsWithChildren<Props> &
  ComponentPropsWithoutRef<'table'>

export type TableComponentPropWithRef<Props = {}> = TableComponentProp<Props> &
  PolymorphicRef<'table'>

/* -------------------------------------------- */
/* TH                                           */
/* -------------------------------------------- */

export type ThComponentProp<Props = {}> = PropsWithChildren<Props> &
  ComponentPropsWithoutRef<'th'>

export type ThComponentPropWithRef<Props = {}> = ThComponentProp<Props> &
  PolymorphicRef<'th'>

/* -------------------------------------------- */
/* TD                                           */
/* -------------------------------------------- */

export type TdComponentProp<Props = {}> = PropsWithChildren<Props> &
  ComponentPropsWithoutRef<'td'>

export type TdComponentPropWithRef<Props = {}> = TdComponentProp<Props> &
  PolymorphicRef<'td'>

/* -------------------------------------------- */
/* TR                                           */
/* -------------------------------------------- */

export type TrComponentProp<Props = {}> = Props &
  ComponentPropsWithoutRef<'tr'> & {
    children: ThComponentProp | TdComponentProp
  }

export type TrComponentPropWithRef<Props = {}> = PolymorphicRef<'tr'> &
  Props &
  ComponentPropsWithoutRef<'tr'> & {
    children: ThComponentPropWithRef | TdComponentPropWithRef
  }
