import styled from 'styled-components'
import { Button } from '../../../core/Button'
import { ResetCss } from 'styled-utility-first'
import { ColorPalette as $ } from 'styled-utility-first'
import { IconOnly } from '../../../core/IconOnly'

export const STyledButton = styled(IconOnly.Button)`
  ${ResetCss.button}

  --button-size: 3.5rem;
  --padding: 0.75rem;

  padding: var(--padding);
  border-radius: 50%;
  font-size: calc(var(--button-size) - var(--padding) * 2);
  color: #fff;
  width: var(--button-size);
  height: var(--button-size);
  box-sizing: border-box;
  background-color: #00acee;
`
