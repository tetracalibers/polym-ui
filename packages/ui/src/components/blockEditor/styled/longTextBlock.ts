import styled from 'styled-components'
import { editInputStyle } from './editInput'

export const StretchTextArea = styled.textarea`
  ${editInputStyle}
  width: 100%;
  line-height: 24px;
  resize: none;
  overflow: auto;
  height: auto;
`
