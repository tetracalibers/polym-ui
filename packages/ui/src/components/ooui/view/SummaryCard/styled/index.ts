import styled from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const SummaryFlex = styled.div`
  --image-size: 100px;
  --padding: 1rem;

  display: flex;
  justify-content: start;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: calc(var(--image-size) * 0.2);
`

export const Summary = styled.div`
  padding: 1rem;
  color: rgb(38, 50, 56);
  text-transform: uppercase;
  font-size: calc((var(--image-size) - var(--padding)) / 5);
  overflow-wrap: break-word;
  max-height: var(--image-size);
  box-sizing: border-box;
`

export const Logo = styled.div`
  && {
    box-shadow: rgba(17, 17, 26, 0.05) 0px 4px 16px,
      rgba(17, 17, 26, 0.05) 0px 8px 32px;
    flex: 0 0 var(--image-size);
  }

  &&,
  && * {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20%;
  }
`
