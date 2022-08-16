import { color, typography, compose, styleFn } from 'styled-system'
import type * as $ from 'styled-system'
import { Required, $ as $$ } from 'react-tsx-props'

const usingStyledSysPropsMap = {
  text: ['color', 'typography'],
  box: ['this.text', 'space', 'layout', 'position'],
  decorativeText: ['this.text', { shadow: 'textShadow' }],
  decorativeBox: ['this.box', 'border', 'background', { shadow: 'boxShadow' }],
} as const

type UsingStyledSysPropsList = typeof usingStyledSysPropsMap

const styledSysPropsCategory = [
  'space',
  'color',
  'typography',
  'position',
  'layout',
  'background',
  'border',
  'position',
  'shadow',
] as const

type StyledSysPropsCategory = typeof styledSysPropsCategory[number]

type StyledSysProps = {
  space: $.SpaceProps
  color: $.ColorProps
  typography: $.TypographyProps
  layout: $.LayoutProps
  background: $.BackgroundProps
  border: $.BorderProps
  position: $.PositionProps
  shadow: $.ShadowProps
}

type ProvideStyledSysCssPropertyMap<GROUP> =
  GROUP extends StyledSysPropsCategory
    ? { [KEY in GROUP]: keyof StyledSysProps[KEY] }
    : never

type InheritanceRefKey = `this.${keyof UsingStyledSysPropsList}`

type TokenInUsingStyledSysProps =
  | InheritanceRefKey
  | StyledSysPropsCategory
  | ProvideStyledSysCssPropertyMap<StyledSysPropsCategory>

type JoinTypeInArray<T extends unknown[], RESULT = T[0]> = T extends [
  infer FIRST,
  ...infer REST
]
  ? JoinTypeInArray<REST, RESULT & FIRST>
  : RESULT

type ParseTokenInUsingStyledSysPropsList<
  TOKEN extends TokenInUsingStyledSysProps = TokenInUsingStyledSysProps
> = TOKEN extends string
  ? TOKEN extends keyof StyledSysProps
    ? StyledSysProps[TOKEN]
    : never
  : TOKEN extends { [k in infer OBJ_KEY]: infer OBJ_VAL }
  ? OBJ_KEY extends StyledSysPropsCategory
    ? OBJ_VAL extends keyof StyledSysProps[OBJ_KEY]
      ? Pick<StyledSysProps[OBJ_KEY], OBJ_VAL>
      : never
    : never
  : never

type ParseUsingStyledSysPropsList<
  LIST extends TokenInUsingStyledSysProps[],
  RESULT extends ParseTokenInUsingStyledSysPropsList[] = []
> = LIST extends [infer FIRST, ...infer REST]
  ? FIRST extends TokenInUsingStyledSysProps
    ? REST extends TokenInUsingStyledSysProps[]
      ? ParseUsingStyledSysPropsList<
          REST,
          [...RESULT, ParseTokenInUsingStyledSysPropsList<FIRST>]
        >
      : ParseUsingStyledSysPropsList<[FIRST], RESULT>
    : RESULT
  : RESULT

type RemoveThis<S extends InheritanceRefKey> = S extends `this.${infer NAME}`
  ? NAME extends keyof UsingStyledSysPropsList
    ? NAME
    : never
  : never

type GroupByWhetherInheritanceRef<
  LIST extends readonly TokenInUsingStyledSysProps[],
  OTHER extends readonly TokenInUsingStyledSysProps[] = [],
  INHERI extends readonly TokenInUsingStyledSysProps[] = []
> = LIST extends readonly [infer F, ...infer R]
  ? F extends InheritanceRefKey
    ? R extends readonly TokenInUsingStyledSysProps[]
      ? GroupByWhetherInheritanceRef<R, OTHER, [...INHERI, F]>
      : never
    : R extends readonly TokenInUsingStyledSysProps[]
    ? F extends TokenInUsingStyledSysProps
      ? GroupByWhetherInheritanceRef<R, [...OTHER, F], INHERI>
      : never
    : never
  : {
      other: OTHER
      ref: INHERI
    }

type ToStyledSysNativeProps<
  ORIGINAL extends InheritanceRefKey[],
  RESULT extends TokenInUsingStyledSysProps[] = []
> = ORIGINAL['length'] extends 0
  ? RESULT
  : ORIGINAL extends [infer F, ...infer R]
  ? F extends InheritanceRefKey
    ? R extends InheritanceRefKey[]
      ? RemoveThis<F> extends keyof UsingStyledSysPropsList
        ? GroupByWhetherInheritanceRef<
            UsingStyledSysPropsList[RemoveThis<F>]
          > extends {
            ref: infer REF
            other: infer OTHER
          }
          ? REF extends InheritanceRefKey[]
            ? OTHER extends TokenInUsingStyledSysProps[]
              ? ToStyledSysNativeProps<[...REF, ...R], [...RESULT, ...OTHER]>
              : never
            : never
          : never
        : ToStyledSysNativeProps<
            R,
            [...RESULT, ...UsingStyledSysPropsList[RemoveThis<F>]]
          >
      : never
    : never
  : never

type UsingCssAsProps<KEY extends keyof UsingStyledSysPropsList> = $$.Mutable<
  UsingStyledSysPropsList[KEY]
> extends infer LIST
  ? LIST extends TokenInUsingStyledSysProps[]
    ? GroupByWhetherInheritanceRef<LIST> extends {
        ref: infer REF
        other: infer OTHER
      }
      ? REF extends InheritanceRefKey[]
        ? OTHER extends TokenInUsingStyledSysProps[]
          ? JoinTypeInArray<
              [
                ...ParseUsingStyledSysPropsList<ToStyledSysNativeProps<REF>>,
                ...ParseUsingStyledSysPropsList<OTHER>
              ]
            >
          : never
        : never
      : never
    : never
  : never

type TextCssProps = UsingCssAsProps<'text'>
type BoxCssProps = UsingCssAsProps<'box'>
type DecorativeTextCssProps = UsingCssAsProps<'decorativeText'>
type DecorativeBoxCssProps = UsingCssAsProps<'decorativeBox'>

const cssAsPropsInject = {
  text: Required<styleFn>(
    compose(
      /* -------------------------------------------- */
      // color, backgroundColor
      // @see https://styled-system.com/api#color
      color,
      /* -------------------------------------------- */
      // fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textAlign, and fontStyle.
      // @see https://styled-system.com/api#typography
      typography
    )
  ),
}

/*

type CssPropsConfig = typeof cssAsProps

export type SelectLabelCssProps = keyof CssPropsConfig

interface CssProps<L extends SelectLabelCssProps> {}


namespace provideCssProps {
  export const as = (kind: SelectLabelCssProps) => {
    return css`
      ${cssAsProps[kind].default}
    `
  }
}

*/
