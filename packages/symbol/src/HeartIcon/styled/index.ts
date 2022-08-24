import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette } from 'styled-utility-first'

export const StyledElement = styled.span<CharacterProps>`
  --size: ${({ size }) => size};
  --color: ${({ color }) => color};

  position: relative;
  width: var(--size);
  height: calc(var(--size) * 0.3);

  &::before,
  &::after {
    position: absolute;
    content: '';
    left: calc(var(--size) * 0.55);
    top: 0;
    width: calc(var(--size) * 0.55);
    height: calc(var(--size) * 0.85);
    background: var(--color);
    border-radius: calc(var(--size) * 0.55) calc(var(--size) * 0.55) 0 0;
    transform: rotate(-45deg);
    transform-origin: 0 100%;
  }

  &::after {
    left: 0;
    transform: rotate(45deg);
    transform-origin: 100% 100%;
  }
`
