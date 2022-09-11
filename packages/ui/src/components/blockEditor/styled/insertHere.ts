import styled from 'styled-components'

export const PositionManager = styled.div`
  position: relative;

  /* icon */
  & > :first-child {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    left: -1.5rem;
  }
`
