import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const injectDashedLineStyle = css`
  ${({ theme }) => css`
    --line-color: ${theme.lineColor};
    --bg-color: ${theme.bgColor};
    --under-offset: ${theme.underOffsetV + theme.underOffsetU};
    --thickness: ${theme.thicknessV + theme.thicknessU};
  `}

  background-image: linear-gradient(
    90deg,
    var(--line-color) 66%,
    rgba(255, 255, 255, 0) 0
  );
  background-repeat: repeat-x;
  background-size: 0.2em var(--thickness);
  background-position-y: calc(1em - var(--under-offset));
  text-shadow: 0.05em 0 var(--bg-color), -0.05em 0 var(--bg-color);
`
