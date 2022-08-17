import { StyledSystem } from '../_internal/StyledSystem'
import _ from 'lodash'
import { styleFn } from 'styled-system'

type InheritanceSyntax = `this.${string}`
type PickImportSyatax<ModuleCategories = StyledSystem.PropsCategory> =
  ModuleCategories extends StyledSystem.PropsCategory
    ? {
        [PickCategory in ModuleCategories]: keyof StyledSystem.Props[PickCategory]
      }
    : never

type AbstractConfValue<T extends 'str' | 'obj' | 'all' = 'all'> =
  T extends 'str'
    ? InheritanceSyntax | StyledSystem.PropsCategory
    : T extends 'obj'
    ? PickImportSyatax
    : T extends 'all'
    ? InheritanceSyntax | PickImportSyatax | StyledSystem.PropsCategory
    : never

type AbstractConfKey = string

export type AbstractConf = {
  readonly [Key: AbstractConfKey]: readonly AbstractConfValue[]
}

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

const groupingConfValue = (confValues: readonly AbstractConfValue[]) => {
  const [stringSyntax, objSyntax] = _.partition(confValues, value =>
    _.isString(value)
  )
  const [inheritanceSyntax, notInheritanceSyntax] = _.partition(
    stringSyntax as AbstractConfValue<'str'>[],
    value => isInheritanceSyntax(value)
  )
  return {
    moduleCategory: notInheritanceSyntax as StyledSystem.PropsCategory[],
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
    const { moduleCategory, inheritanceSyntax, pickImportSyatax } =
      groupingConfValue(expanded)
    return _.flatMap([
      ...moduleCategory,
      ...pickImportSyatax,
      ...inheritanceSyntax.map(inhToken =>
        expandInheritanceSyntax(propsMap)(inhToken as InheritanceSyntax)
      ),
    ])
  }

const styleFnRecord = StyledSystem.styleFn as Record<string, styleFn>

const isStyledSystemModuleCategory = (
  pickCategory: string
): pickCategory is StyledSystem.PropsCategory => {
  const moduleCategories = Object.keys(styleFnRecord)
  return moduleCategories.includes(pickCategory)
}

const getStyleFn = (pickCategory: string) => {
  return isStyledSystemModuleCategory(pickCategory)
    ? styleFnRecord[pickCategory]
    : undefined
}

export const styleFnMapGenerator = (propsMap: AbstractConf) => {
  return _.mapValues(propsMap, confValueList => {
    const { moduleCategory, inheritanceSyntax, pickImportSyatax } =
      groupingConfValue(confValueList)
    const expandedConfValueList = _.flatMap([
      ...moduleCategory,
      ...pickImportSyatax.map(record => Object.keys(record)),
      ...inheritanceSyntax.map(inh => expandInheritanceSyntax(propsMap)(inh)),
    ])
    return expandedConfValueList
      .map(name => getStyleFn(name as string))
      .filter(fn => fn !== undefined)
  })
}
