import { css, CSSObject } from 'styled-components'
import { Pseudo } from '../constants/pseudo'

export type PseudoProps = {
  [pseudo in Pseudo as `${pseudo}Style`]?: CSSObject
}

export const PseudoMixin = (pseudo: Pseudo, ruleset: CSSObject | undefined) => {
  // prettier-ignore
  return ruleset !== undefined && css`
    &:${pseudo} {
      ${ruleset}
    }
  `
}
