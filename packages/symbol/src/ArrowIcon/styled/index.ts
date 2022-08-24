import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette } from 'styled-utility-first'

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
    .exhaustive()
}

export const StyledElement = styled.span<CharacterProps>`
  width: ${({ size, thickness }) => css`calc(${size} * 0.7 - ${thickness}px)`};
  height: ${({ size, thickness }) => css`calc(${size} * 0.7 - ${thickness}px)`};
  border-color: ${({ color }) => color};
  border-width: ${({ thickness }) => thickness}px;
  border-style: solid;
  border-left: 0;
  border-top: 0;
  display: inline-block;
  ${({ direction }) => rotate(direction)}
`
