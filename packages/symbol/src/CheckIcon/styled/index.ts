import styled from 'styled-components'
import { CharacterProps } from '../model/props'

export const StyledElement = styled.span<CharacterProps>`
  --height: ${({ sizeV, sizeU }) => `${sizeV}${sizeU}`};
  --border-color: ${({ color }) => color};
  --border-width: ${({ thickness }) => thickness}px;

  && {
    width: calc(var(--height) * 0.575);
    height: var(--height);
    border-width: var(--border-width);
    border-style: solid;
    border-color: var(--border-color);
    border-left: 0;
    border-top: 0;
    display: inline-block;

    transform: rotate(45deg);
  }
`
