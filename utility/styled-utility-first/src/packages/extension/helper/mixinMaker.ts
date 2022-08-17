import _ from 'lodash'
import { css, ThemedStyledProps } from 'styled-components'

export const makeAtomicMixin = <Props>(name: keyof Props) => {
  const pname = _.kebabCase(name as string)
  return `
    ${(value: ThemedStyledProps<Partial<Props>, any>) =>
      value[name] !== null && `${pname}: ${value[name]}`}
  `
}

export const getMixins = <Props extends Object, Conf>(conf: Conf) => {
  const injectStr = Object.keys(conf).reduce((prev, key) => {
    return `
      ${prev}
      ${makeAtomicMixin(key)}
    `
  }, '')
  return css<Partial<Props>>`
    ${injectStr}
  `
}
