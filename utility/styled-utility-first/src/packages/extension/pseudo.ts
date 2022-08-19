import { css, CSSObject } from 'styled-components'
import { Pseudo, pseudoElement as _pseudoElement } from '../constants/pseudo'

export type PseudoProps = {
  [pseudo in Pseudo as `${pseudo}Style`]?: CSSObject
}

export const PseudoMixin = (pseudo: Pseudo, ruleset: CSSObject | undefined) => {
  const pseudoElement = _pseudoElement as readonly string[]
  const prefix = pseudoElement.includes(pseudo) ? '::' : ':'

  // prettier-ignore
  return ruleset !== undefined && css`
    &${prefix}${pseudo} {
      ${ruleset}
    }
  `
}
