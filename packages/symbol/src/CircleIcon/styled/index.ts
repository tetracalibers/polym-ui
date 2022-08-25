import styled from 'styled-components'
import { CharacterProps } from '../model/props'

export const StyledElement = styled.span<CharacterProps>`
  --width: ${({ widthV, widthU }) => `${widthV}${widthU}`};
  --background-color: ${({ color }) => color};

  display: inline-block;
  width: var(--width);
  height: var(--width);
  border-radius: 50%;
  background-color: var(--background-color);
`
