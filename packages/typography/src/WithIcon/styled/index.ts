import styled from 'styled-components'
import { CharacterProps } from '../model/props'

export const Wrapper = styled.span<CharacterProps>`
  --space: ${({ spaceV, spaceU }) => `${spaceV}${spaceU}`};

  && {
    /* スペース文字を削除 */
    display: inline-flex;
    align-items: baseline;
  }

  /* icon */
  & :first-child {
    margin-inline-end: var(--space);
  }
`
