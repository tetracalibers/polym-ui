import styled from 'styled-components'
import { CharacterProps } from '../model/props'

export const StyledElement = styled.div<CharacterProps>`
  --gap: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};
  --min: ${({ columnMinWidthV, columnMinWidthU }) =>
    `${columnMinWidthV}${columnMinWidthU}`};

  && {
    display: grid;
    grid-gap: var(--gap);
    grid-template-columns: repeat(auto-fit, minmax(min(var(--min), 100%), 1fr));
  }
`
