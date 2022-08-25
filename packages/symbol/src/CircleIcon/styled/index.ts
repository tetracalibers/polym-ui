import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'

export const StyledElement = styled.span<CharacterProps>`
  --width: ${({ widthV, widthU }) => `${widthV}${widthU}`};
  --background-color: ${ColorPalette.grayScale.dark};

  display: inline-block;
  width: var(--width);
  height: var(--width);
  border-radius: 50%;
  background-color: var(--background-color);
`
