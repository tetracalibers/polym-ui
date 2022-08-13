import { css } from 'styled-components'
import * as CSST from 'csstype'
import { Alias, Object as Obj, Union } from 'ts-typedef-helper'

type Properties = CSST.StandardLonghandPropertiesHyphen
type PropertiesKey = keyof Properties

type ValueOf<T> = T[keyof T]

type PropertyNameU = NonNullable<Obj.KeyPaths<Properties>>
type PropertyValueU = NonNullable<Properties[PropertyNameU]> extends infer A
  ? {
      [k in keyof A]: A[k]
    }
  : never

type PropertyNameT = Union.To.Tuple<PropertyNameU>

export type ObjKeyCast<
  K extends Alias.ObjIndex,
  T extends Alias.ObjIndex = string
> = K extends infer Keys ? (Keys extends T ? Keys : never) : never

type PropertyUMap = {
  [k in PropertyNameT as PropertyNameT[number]]: k
}

type CssDeclaration =
  CSST.StandardLonghandPropertiesHyphen extends infer PATTERN
    ? keyof PATTERN extends infer PKey
      ? PATTERN[keyof PATTERN] extends infer ValueU
        ? PKey extends Object
          ? Obj.KeyPaths<PKey>
          : never
        : never
      : never
    : never

const bind = (selector: string, ruleSet: string[]) => {
  const ruleSetStr = ruleSet.reduce((prev, curr) => {
    return `
      ${prev}
      ${curr}
    `
  }, '')

  const declaration = `
    
  `
}
