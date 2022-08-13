import { css } from 'styled-components'

export const cssBuilder = (selector: string) => (declaration: string) => {
  const styleStr = `
    ${selector}: {
      ${declaration}
    }
  `
  return css`
    ${styleStr}
  `
}
