import styled from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const Flex = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: calc(75px * 0.5);
  width: fit-content;
`

export const Summary = styled.div`
  padding: 1rem;
  color: ${$.grayScale.dark};
`

export const Logo = styled.div`
  &&,
  && * {
    width: 75px;
    height: 75px;
    border-radius: 50%;
  }
`
