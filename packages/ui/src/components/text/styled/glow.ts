import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

const shadow = css`
  text-shadow: 0 0 0.1em, 0 0 0.3em;
`

export const injectGlowStyle = css`
  ${({ theme }) => css`
    --duration: ${theme.duration}s;
  `}
  transition: var(--duration);

  ${({ theme }) => theme.trigger === 'none' && shadow}

  &:hover {
    ${({ theme }) => theme.trigger === 'hover' && shadow}
  }
`
