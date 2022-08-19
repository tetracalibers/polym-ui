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
  text: [
    'color',
    'typography',
    { shadow: 'textShadow' },
    'textDecoration',
    'textReadable',
    'writingMode',
    'generatedContent',
  ],
  box: [
    'this.text',
    'space',
    'layout',
    'position',
    'boxModel',
    'listStyle',
    'outline',
    'flexbox',
  ],
  decorativeBox: [
    'this.box',
    'border',
    'background',
    'shadow',
    'advancedBackground',
    'filterEffect',
  ],
  button: ['this.decorativeBox', 'userAction', 'formInterface'],
  link: ['this.decorativeBox', 'userAction'],
  animation: ['transition', 'willChange'],
  transform: ['transform'],
  svg: ['svg'],
} as const

/* types -------------------------------------- */

import { CssProps } from './packages/generator/CssProps'
import { Pseudo } from './packages/constants/pseudo'

type Config = typeof config

export type TextCssProps = CssProps<Config, 'text'>
export type BoxCssProps = CssProps<Config, 'box'>
export type DecorativeBoxCssProps = CssProps<Config, 'decorativeBox'>
export type ButtonCssProps = CssProps<Config, 'button'>
export type LinkCssProps = CssProps<Config, 'link'>
export type AnimationCssProps = CssProps<Config, 'animation'>
export type TransformCssProps = CssProps<Config, 'transform'>
export type SvgCssProps = CssProps<Config, 'svg'>

export type CssPropsCategory = keyof Config
export type CssPropsTypeFactory<K extends CssPropsCategory> = CssProps<
  Config,
  K
>

export { Pseudo }

/* styleFn ------------------------------------ */

import { styleFnMapGenerator } from './packages/generator/styleFn'
import { PseudoProps, pseudoMixin } from './packages/extension/pseudo'
import { css } from 'styled-components'
import { NotPseudoProps } from './packages/extension/not'

const styleFnMap = styleFnMapGenerator(config)

export namespace provideCssProps {
  export const as = (kind: keyof Config) => {
    return styleFnMap[kind]
  }
  export const pseudo = css<PseudoProps & NotPseudoProps>`
    ${({ hoverStyle }) => pseudoMixin('hover', hoverStyle)}
    ${({ focusStyle }) => pseudoMixin('focus', focusStyle)}
    ${({ disabledStyle }) => pseudoMixin('disabled', disabledStyle)}
    ${({ activeStyle }) => pseudoMixin('active', activeStyle)}
    
    ${({ afterStyle }) => pseudoMixin('after', afterStyle)}
    ${({ beforeStyle }) => pseudoMixin('before', beforeStyle)}
    
    ${({ notHoverStyle }) => pseudoMixin('hover', notHoverStyle)}
    ${({ notFocusStyle }) => pseudoMixin('focus', notFocusStyle)}
    ${({ notDisabledStyle }) => pseudoMixin('disabled', notDisabledStyle)}
    ${({ notActiveStyle }) => pseudoMixin('active', notActiveStyle)}
  `
}
