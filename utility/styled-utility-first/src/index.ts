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

const config = {
  text: ['color', 'typography', { shadow: 'textShadow' }, 'textDecoration'],
  box: [
    'this.text',
    'space',
    'layout',
    'position',
    'boxModel',
    'listStyle',
    'outline',
  ],
  decorativeBox: ['this.box', 'border', 'background', 'shadow'],
  button: ['this.box', 'border', { shadow: 'boxShadow' }, 'cursor'],
  link: ['this.decorativeBox', 'cursor'],
  animation: ['transition'],
} as const

/* types -------------------------------------- */

import { CssProps } from './packages/generator/CssProps'

type Config = typeof config

export type TextCssProps = CssProps<Config, 'text'>
export type BoxCssProps = CssProps<Config, 'box'>
export type DecorativeBoxCssProps = CssProps<Config, 'decorativeBox'>
export type ButtonCssProps = CssProps<Config, 'button'>
export type LinkCssProps = CssProps<Config, 'link'>
export type AnimationCssProps = CssProps<Config, 'animation'>

/* styleFn ------------------------------------ */

import { styleFnMapGenerator } from './packages/generator/styleFn'

const styleFnMap = styleFnMapGenerator(config)

export namespace provideCssProps {
  export const as = (kind: keyof Config) => {
    return styleFnMap[kind]
  }
}
