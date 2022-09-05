import styled, { css } from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const Core = styled.span`
  --color: ${$.grayScale.dark};
  --font-size: 2rem;
  --line-height: 4rem;

  font-size: var(--font-size);
  color: var(--color);
  line-height: var(--line-height);
`

export const injectSolidLineStyle = css`
  --line-color: ${$.vivid.red};
  --bg-color: ${$.grayScale.light};
  --under-offset: 0.1em;
  --thickness: 1.5px;

  background-image: linear-gradient(var(--line-color), var(--line-color));
  background-repeat: no-repeat;
  background-size: 100% var(--thickness);
  background-position-y: calc(1em - var(--under-offset));
  text-shadow: 0.05em 0 var(--bg-color), -0.05em 0 var(--bg-color);
`

export const injectDashedLineStyle = css`
  ${injectSolidLineStyle}

  background-image: linear-gradient(90deg, var(--line-color) 66%, rgba(255, 255, 255, 0) 0);
  background-repeat: repeat-x;
  background-size: 0.2em var(--thickness);
`
