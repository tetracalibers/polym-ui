import styled from 'styled-components'
import { CharacterProps } from '../model/props'

export const StyledElement = styled.span<CharacterProps>`
  --size: ${({ sizeV, sizeU }) => `${sizeV}${sizeU}`};
  --background-color: ${({ color }) => color};

  display: inline-block;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--background-color);
`
