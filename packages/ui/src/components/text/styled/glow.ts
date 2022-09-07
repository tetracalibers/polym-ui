import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const injectGlowStyle = css`
  && {
    ${({ theme }) => css`
      --duration: ${theme.duration}s;
    `}
    transition: var(--duration);
  }

  &&:hover {
    text-shadow: 0 0 0.1em, 0 0 0.3em;
  }
`
