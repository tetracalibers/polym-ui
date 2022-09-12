import { ColorPalette as $ } from 'styled-utility-first'
import styled from 'styled-components'

export const WrapIcon = styled.div`
  font-size: 2em;
  padding-right: 1rem;

  & path {
    fill: ${$.grayScale.light};
    stroke: ${$.grayScale.dark};
  }
`
