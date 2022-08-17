import { StyledSystem } from '../constants/cssprops'
import _ from 'lodash'
import { compose, styleFn } from 'styled-system'
import { css, FlattenInterpolation, ThemedStyledProps } from 'styled-components'

/* -------------------------------------------- */
/* SYNTAX                                       */
/* -------------------------------------------- */

type CallStyleFnSyntax = keyof typeof StyledSystem.styleFn

type CallMixinFnSyntax = keyof typeof StyledSystem.mixin

type InheritanceSyntax = `this.${string}`

type PickImportSyatax<ModuleCategories = CallStyleFnSyntax> =
  ModuleCategories extends CallStyleFnSyntax
    ? {
        [PickCategory in ModuleCategories]: keyof StyledSystem.Props[PickCategory]
      }
    : never

/* -------------------------------------------- */
/* CONFIG OBJECT STRUCTURE                      */
/* -------------------------------------------- */

type AbstractConfValue<T extends 'str' | 'obj' | 'all' = 'all'> =
  T extends 'str'
    ? InheritanceSyntax | CallStyleFnSyntax | CallMixinFnSyntax
    : T extends 'obj'
    ? PickImportSyatax
    : T extends 'all'
    ?
        | InheritanceSyntax
        | PickImportSyatax
        | CallStyleFnSyntax
        | CallMixinFnSyntax
    : never

type AbstractConfKey = string

export type AbstractConf = {
  readonly [Key: AbstractConfKey]: readonly AbstractConfValue[]
}

/* -------------------------------------------- */
/* IS PREDICATE                                 */
/* -------------------------------------------- */

const isInheritanceSyntax = (
  token: AbstractConfValue<'str'>
): token is InheritanceSyntax => {
  return token.includes('this.')
}

const isConfKeys = (
  obj: AbstractConf,
  pickKey: string
): pickKey is AbstractConfKey => {
  return Object.keys(obj).includes(pickKey)
}

const isMixinName = (pickKey: string): pickKey is CallMixinFnSyntax => {
  return Object.keys(StyledSystem.mixin).includes(pickKey)
}

const isNativeStyleFnName = (
  pickCategory: string
): pickCategory is CallStyleFnSyntax => {
  const moduleCategories = Object.keys(styleFnRecord)
  return moduleCategories.includes(pickCategory)
}

/* -------------------------------------------- */
/* PARSER                                       */
/* -------------------------------------------- */

const groupingConfValue = (confValues: readonly AbstractConfValue[]) => {
  const [stringSyntax, objSyntax] = _.partition(confValues, value =>
    _.isString(value)
  )
  const [inheritanceSyntax, notInheritanceSyntax] = _.partition(
    stringSyntax as AbstractConfValue<'str'>[],
    value => isInheritanceSyntax(value)
  )

  const [callMixinSyntax, callStyleFnSyntax] = _.partition(
    notInheritanceSyntax,
    value => isMixinName(value)
  )

  return {
    callMixinSyntax: callMixinSyntax as CallMixinFnSyntax[],
    callStyleFnSyntax: callStyleFnSyntax as CallStyleFnSyntax[],
    inheritanceSyntax: inheritanceSyntax as InheritanceSyntax[],
    pickImportSyatax: objSyntax as PickImportSyatax[],
  }
}

const expandInheritanceSyntax =
  (propsMap: AbstractConf) =>
  (token: InheritanceSyntax): AbstractConfValue[] => {
    const propName = token.replace('this.', '')
    if (!isConfKeys(propsMap, propName)) return []
    const expanded = propsMap[propName]
    const {
      callStyleFnSyntax,
      callMixinSyntax,
      inheritanceSyntax,
      pickImportSyatax,
    } = groupingConfValue(expanded)
    return _.flatMap([
      ...callStyleFnSyntax,
      ...callMixinSyntax,
      ...pickImportSyatax,
      ...inheritanceSyntax.map(inhToken =>
        expandInheritanceSyntax(propsMap)(inhToken as InheritanceSyntax)
      ),
    ])
  }

/* -------------------------------------------- */
/* MIXIN & STYLEFN                              */
/* -------------------------------------------- */

type Mixin = FlattenInterpolation<ThemedStyledProps<unknown, unknown>>

const styleFnRecord = StyledSystem.styleFn as Record<string, styleFn>
const mixinRecord = StyledSystem.mixin as Record<string, Mixin>

const getStyleFn = (pickCategory: string) => {
  return isNativeStyleFnName(pickCategory)
    ? styleFnRecord[pickCategory]
    : undefined
}

const getMixin = (pickCategory: string) => {
  return isMixinName(pickCategory) ? mixinRecord[pickCategory] : undefined
}

/* -------------------------------------------- */
/* GENERATOR                                    */
/* -------------------------------------------- */

export const styleFnMapGenerator = (propsMap: AbstractConf) => {
  return _.mapValues(propsMap, confValueList => {
    const {
      callMixinSyntax,
      callStyleFnSyntax,
      inheritanceSyntax,
      pickImportSyatax,
    } = groupingConfValue(confValueList)
    const expandedConfValueList = _.flatMap([
      ...callStyleFnSyntax,
      ...pickImportSyatax.map(record => Object.keys(record)),
      ...inheritanceSyntax.map(inh => expandInheritanceSyntax(propsMap)(inh)),
    ])
    const styleFnList = expandedConfValueList
      .map(name => getStyleFn(name as string))
      .filter(fn => fn !== undefined) as styleFn[]
    const mixinList = callMixinSyntax
      .map(name => getMixin(name as string))
      .filter(fn => fn !== undefined) as Mixin[]
    return css`
      ${compose(...styleFnList)}
      ${mixinList}
    `
  })
}
