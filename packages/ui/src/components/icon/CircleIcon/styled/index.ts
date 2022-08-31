import styled from 'styled-components'
import { CharacterProps } from '../model/props'

export const StyledElement = styled.span<CharacterProps>`
  --size: ${({ sizeV, sizeU }) => `${sizeV}${sizeU}`};
  --background-color: ${({ color }) => color};
  --border-width: ${({ borderWidth }) => borderWidth}px;
  --border-color: ${({ borderColor }) => borderColor};

  display: inline-block;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--background-color);
  border-width: var(--border-width);
  border-style: solid;
  border-color: var(--border-color);
`
