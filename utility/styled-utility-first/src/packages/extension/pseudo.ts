import { css, CSSObject } from 'styled-components'
import { Pseudo, pseudoElement as _pseudoElement } from '../constants/pseudo'

type PascalCase<S extends string> = string extends S
  ? string
  : S extends `${infer T}-${infer U}`
  ? `${Capitalize<T>}${PascalCase<U>}`
  : Capitalize<S>

type CamelCase<S extends string> = string extends S
  ? string
  : S extends `${infer T}-${infer U}`
  ? `${T}${PascalCase<U>}`
  : S

export type PseudoProps = {
  [pseudo in Pseudo as CamelCase<`${pseudo}Style`>]?: CSSObject
}

export const pseudoMixin = (pseudo: Pseudo, ruleset: CSSObject | undefined) => {
  const pseudoElement = _pseudoElement as readonly string[]
  const prefix = pseudoElement.includes(pseudo) ? '::' : ':'

  // prettier-ignore
  return ruleset !== undefined && css`
    &${prefix}${pseudo} {
      ${ruleset}
    }
  `
}
