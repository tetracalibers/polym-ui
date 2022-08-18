import { css } from 'styled-components'
import * as CSST from 'csstype'
import { compose, style, styleFn, system } from 'styled-system'
import _ from 'lodash'
import { Required } from 'react-tsx-props'

/*
export type PseudoProps<Props> = {
  pseudo: {
    select: CSST.SimplePseudos[]
    style: {
      [property in keyof Props]: Props[property]
    }
  }
}

*/
const pseudoSelector = (selector: CSST.SimplePseudos[]) => {
  return selector
    .map(str => {
      return str.replace(':', '')
    })
    .join(',')
}

/*
const injectStyleObj = <Props>({ pseudo }: PseudoProps<Props>) => {
  return Object.entries(pseudo.style).reduce((prev, entry) => {
    const [propertyName, _propertyValue] = entry
    return {
      ...prev,
      ...pseudo.select.map(selector => {
        return {
          [`${selector.replace(':', '')}${_.capitalize(propertyName)}`]: {
            property: selector,
            transform: (value: string) =>
              `{} ${selector} { ${propertyName}: ${value} }`,
          },
        }
      }),
    }
  }, {})
}

export const pseudoMixin =
  <Props>(basicSystem: styleFn[]) =>
  (pseudo: PseudoProps<Props>) => {
    return compose(system(injectStyleObj<Props>(pseudo)), ...basicSystem)
  }
*/
