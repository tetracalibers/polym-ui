import styled from 'styled-components'
import { ColorPalette } from 'styled-utility-first'

export const StretchTextArea = styled.textarea`
  color: ${ColorPalette.grayScale.dark};
  box-sizing: border-box;
  outline: none;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  padding: 0.5em 1em;
  resize: none;
  overflow: auto;
  height: auto;
  border: none;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  border-radius: 10px;
`
