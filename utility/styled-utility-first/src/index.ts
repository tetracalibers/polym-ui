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
/* RESET                                        */
/* -------------------------------------------- */

import { ResetCss } from './packages/reset'
export { ResetCss }

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
  // componentBase ....ライブラリ提供コンポーネント用
  // position指定とanimation付加ができない
  componentBaseBox: [
    'this.text',
    'space',
    'layout',
    'background',
    'border',
    'shadow',
    'advancedBackground',
    'filterEffect',
  ],
  button: ['this.decorativeBox', 'userAction', 'formInterface'],
  componentBaseButton: ['this.componentBaseBox', 'userAction', 'formInterface'],
  link: ['this.decorativeBox', 'userAction'],
  animation: ['transition', 'willChange'],
  transform: ['transform'],
  svg: ['svg'],
} as const

/* types -------------------------------------- */

import { CssProps, CssPropsWithoutPseudo } from './packages/generator/CssProps'
import { Pseudo } from './packages/constants/pseudo'
import { PseudoProps, pseudoMixin } from './packages/extension/pseudo'

type Config = typeof config

export type TextCssProps = CssProps<Config, 'text'>
export type BoxCssProps = CssProps<Config, 'box'>
export type DecorativeBoxCssProps = CssProps<Config, 'decorativeBox'>
export type ButtonCssProps = CssProps<Config, 'button'>
export type LinkCssProps = CssProps<Config, 'link'>
export type AnimationCssProps = CssProps<Config, 'animation'>
export type TransformCssProps = CssProps<Config, 'transform'>
export type SvgCssProps = CssProps<Config, 'svg'>

export type ComponentBaseBoxCssProps = CssPropsWithoutPseudo<
  Config,
  'componentBaseBox'
>
export type ComponentBaseButtonCssProps = CssPropsWithoutPseudo<
  Config,
  'componentBaseButton'
>

export type CssPropsCategory = keyof Config
export type CssPropsTypeFactory<K extends CssPropsCategory> = CssProps<
  Config,
  K
>

type UnionToIntersection<U> = (U extends U ? (a: U) => void : never) extends (
  a: infer R
) => void
  ? R
  : never

type Distribute<U> = U extends CssPropsCategory
  ? {
      [key in keyof CssPropsWithoutPseudo<
        Config,
        U
      >]: CssPropsTypeFactory<U>[key]
    }
  : never

export type AllCssProps = keyof UnionToIntersection<
  Distribute<CssPropsCategory>
>

export type AllPseudoStyleProps = keyof PseudoProps

export { Pseudo }

/* styleFn ------------------------------------ */

import { styleFnMapGenerator } from './packages/generator/styleFn'
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

/* -------------------------------------------- */
/* PROP NAMES                                   */
/* -------------------------------------------- */

import { textDecorationProps } from './packages/extension/textDecoration'
import { textReadableProps } from './packages/extension/textReadable'
import { writingModeProps } from './packages/extension/writingMode'

export { textDecorationProps, textReadableProps, writingModeProps }

/* -------------------------------------------- */
/* BUILDER                                      */
/* -------------------------------------------- */

import { mixinBuilder } from './packages/extension/helper/mixinMaker'

export { mixinBuilder }
