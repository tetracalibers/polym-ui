import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const injectSolidLineStyle = css`
  ${({ theme }) => css`
    --line-color: ${theme.lineColor};
    --bg-color: ${theme.bgColor};
    --under-offset: ${theme.underOffsetV + theme.underOffsetU};
    --thickness: ${theme.thicknessV + theme.thicknessU};
  `}

  background-image: linear-gradient(var(--line-color), var(--line-color));
  background-repeat: no-repeat;
  background-size: 100% var(--thickness);
  background-position-y: calc(1em - var(--under-offset));
  text-shadow: 0.05em 0 var(--bg-color), -0.05em 0 var(--bg-color);
`
