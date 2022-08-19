import * as CSST from 'csstype'
import { css } from 'styled-components'

export type TransformFunc = {
  translateX?: CSST.Property.Translate
  translateY?: CSST.Property.Translate
}

export type TransformFuncKind = keyof TransformFunc

export type TransformProps = {
  transform?: 'none' | TransformFunc
}

export const transformMixin = (func: TransformFunc | 'none' | undefined) => {
  if (func === undefined) {
    return
  }
  if (func === 'none') {
    return css`
      transform: none;
    `
  }
  return css`
    transform: ${Object.entries(func)
      .map((key, value) => `${key}(${value})`)
      .join(' ')};
  `
}
