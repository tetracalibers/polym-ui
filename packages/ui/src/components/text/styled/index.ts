import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const Core = styled.span`
  ${({ theme }) => css`
    --font-size: ${theme.fontSizeV + theme.fontSizeU};
    --color: ${theme.color};
    --line-height: ${theme.lineHeight};
  `}

  font-size: var(--font-size);
  color: var(--color);
  line-height: var(--line-height);
`
