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
  --line-color: rgb(144, 164, 174);
  --bg-color: ${$.grayScale.light};
  --under-offset: 0.1em;
  --thickness: 1.5px;

  background: linear-gradient(var(--line-color), var(--line-color)) no-repeat;
  background-size: 100% var(--thickness);
  background-position-y: calc(1em - var(--under-offset));
  text-shadow: 0.05em 0 var(--bg-color), -0.05em 0 var(--bg-color);
`
