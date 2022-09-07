import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const injectWavyLineStyle = css`
  ${({ theme }) => css`
    --line-color: ${theme.lineColor};
    --bg-color: ${theme.bgColor};
    --under-offset: ${theme.underOffsetV + theme.underOffsetU};
  `}

  background: linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0) 40%,
        var(--line-color) 0,
        var(--line-color) 60%,
        rgba(255, 255, 255, 0) 0
      )
      0 1em,
    linear-gradient(
        45deg,
        rgba(255, 255, 255, 0) 40%,
        var(--line-color) 0,
        var(--line-color) 60%,
        rgba(255, 255, 255, 0) 0
      )
      0.1em 1em;
  background-repeat: repeat-x;
  background-size: 0.2em 0.1em;
  text-shadow: 0.025em 0 var(--bg-color), -0.025em 0 var(--bg-color);
  background-position-y: calc(1em - var(--under-offset));
`
