import _ from 'lodash'
import { css } from 'styled-components'

export const makeMixin = <Props>(name: keyof Props) => {
  const pname = _.kebabCase(name as string)
  return css<Partial<Props>>`
    ${value => value[name] !== null && `${pname}: ${value[name]}`}
  `
}
