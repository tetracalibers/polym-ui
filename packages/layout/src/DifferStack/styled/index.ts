import styled from 'styled-components'
import { CharacterProps } from '../model/props'

export const StyledElement = styled.div<CharacterProps>`
  --space: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};
  --justify-content: ${({ justifyContent }) => justifyContent};
  --align-items: ${({ alignItems }) => alignItems};

  && {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space);
    justify-content: var(--justify-content);
    align-items: var(--align-items);
  }
`
