import { css, CSSObject } from 'styled-components'
import { PseudoClass } from '../constants/pseudo'

export type NotPseudoProps = {
  [pseudo in PseudoClass as `not${Capitalize<pseudo>}Style`]?: CSSObject
}

export const notPseudoMixin = (
  notTarget: PseudoClass,
  ruleset: CSSObject | undefined
) => {
  // prettier-ignore
  return ruleset !== undefined && css`
    &:not(:${notTarget}) {
      ${ruleset}
    }
  `
}
