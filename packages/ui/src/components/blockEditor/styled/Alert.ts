import styled from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const Alert = styled.div`
  text-align: center;
  font-size: 8rem;
  height: 8rem;

  & path {
    fill: ${$.grayScale.light};
    stroke: rgb(240, 98, 146);
  }
`
