import styled from 'styled-components'
import { ColorPalette } from 'styled-utility-first'

export const StretchTextArea = styled.textarea`
  color: ${ColorPalette.grayScale.dark};
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding: 0.5em 1em;
  resize: none;
  overflow: auto;
  height: auto;
  background-color: white;
`
