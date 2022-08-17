/* -------------------------------------------- */
/* PUT                                          */
/* -------------------------------------------- */

import { MARGIN } from './packages/property/margin'

export namespace PUT {
  export const margin = MARGIN
}

/* -------------------------------------------- */
/* SELECT                                       */
/* -------------------------------------------- */

import { CONTINUOUS_ELEMENTS } from './packages/selector/continuous'

export namespace SELECT {
  export const continuousE = CONTINUOUS_ELEMENTS.continuousElements
}

/* -------------------------------------------- */
/* DYNAMIC                                      */
/* -------------------------------------------- */

import { Exist, Truthy } from './packages/dynamic/conditional'

export { Exist, Truthy }

/* -------------------------------------------- */
/* CSS PROPS                                    */
/* -------------------------------------------- */

import { CssProps } from './packages/generator/CssProps'

export type TextCssProps = CssProps.As<'text'>
export type BoxCssProps = CssProps.As<'box'>
export type DecorativeTextCssProps = CssProps.As<'decorativeText'>
export type DecorativeBoxCssProps = CssProps.As<'decorativeBox'>
