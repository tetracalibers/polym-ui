import { css } from 'styled-components'
import { ColorPalette } from 'styled-utility-first'

export const editInputStyle = css`
  color: ${ColorPalette.grayScale.dark};
  box-sizing: border-box;
  outline: none;
  font-size: 16px;
  padding: 0.5em 1em;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  box-shadow: rgb(50 50 105 / 15%) 0px 2px 5px 0px,
    rgb(0 0 0 / 5%) 0px 1px 1px 0px;
`
