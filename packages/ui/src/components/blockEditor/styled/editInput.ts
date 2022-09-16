import { css } from 'styled-components'
import { ColorPalette } from 'styled-utility-first'

export const editInputStyle = css`
  color: ${ColorPalette.grayScale.dark};
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
  padding: 0.5em 1em;
  border: none;
  background-color: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border-radius: 10px;
`
