import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette } from 'styled-utility-first'

export const StyledElement = styled.span<CharacterProps>`
  width: ${({ size, thickness }) => css`calc(${size} * 0.7 - ${thickness}px)`};
  height: ${({ size, thickness }) => css`calc(${size} * 0.7 - ${thickness}px)`};
  border-color: ${({ color }) => color};
  border-width: ${({ thickness }) => thickness}px;
  border-style: solid;
  border-left: 0;
  border-top: 0;
  display: inline-block;

  transform: rotate(315deg);
`
