import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'
import { Core } from '.'

export const injectGlowStyle = css`
  && {
    text-decoration: none;
    transition: 1s;
  }

  &&:hover {
    text-shadow: 0 0 0.1em, 0 0 0.3em;
  }
`
