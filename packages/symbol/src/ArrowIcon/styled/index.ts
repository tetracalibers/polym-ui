import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'

const rotate = (direction: CharacterProps['direction']) => {
  return match(direction)
    .with('right', () => {
      return css`
        transform: rotate(315deg);
      `
    })
    .with('left', () => {
      return css`
        transform: rotate(135deg);
      `
    })
    .with('down', () => {
      return css`
        transform: rotate(45deg);
      `
    })
    .with('up', () => {
      return css`
        transform: rotate(225deg);
      `
    })
    .otherwise(() => '')
}

export const StyledElement = styled.span<CharacterProps>`
  --size: ${({ sizeV, sizeU }) => `${sizeV}${sizeU}`};
  --border-width: ${({ thickness }) => `${thickness}px`};
  --width: calc(var(--size) * 0.7 - var(--border-width));
  --border-color: ${({ color }) => color};

  width: var(--width);
  height: var(--width);
  border-color: var(--border-color);
  border-width: var(--border-width);
  border-style: solid;
  border-left: 0;
  border-top: 0;
  display: inline-block;
  ${({ direction }) => rotate(direction)}
`
