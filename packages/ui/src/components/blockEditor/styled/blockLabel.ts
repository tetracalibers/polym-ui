import styled from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { Button } from '../../core/Button/core'

export const TagButton = styled(Button)`
  ${ResetCss.button}
  background: #B5DEFF;
  color: #4d608b;
  padding: 0.25em 0.75em;
  border-radius: 1em;
`
