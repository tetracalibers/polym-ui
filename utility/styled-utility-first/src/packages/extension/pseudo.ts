import { css } from 'styled-components'
import * as CSST from 'csstype'

export type PseudoProps<Props> = {
  pseudo: {
    select: CSST.SimplePseudos[]
    style: {
      [property in keyof Props]: Props[property]
    }
  }
}

const pseudoSelector = (selector: CSST.SimplePseudos[]) => {
  return selector.join(', ')
}

const injectStyleObj = <Props>(styleObj: { [p in keyof Props]: Props[p] }) => {
  Object.entries(styleObj).reduce((prev, entry) => {
    const [name, value] = entry
    return `
      ${prev}
      ${name}: ${value};
    `
  }, '')
}

export const pseudoMixin = <Props>() => css<Partial<PseudoProps<Props>>>`
  ${({ pseudo }) =>
    pseudo !== undefined &&
    `
    ${pseudoSelector(pseudo.select)} {
      ${injectStyleObj<Props>(pseudo.style)}
    }
  `}
`
