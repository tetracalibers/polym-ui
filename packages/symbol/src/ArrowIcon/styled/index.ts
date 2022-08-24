import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette } from 'styled-utility-first'

// このスタイルだと矢印の辺の長さは49.5px
// width + border-width = 35px
export const StyledElement = styled.span<CharacterProps>`
  width: 33px;
  height: 33px;
  border: 2px solid #333;
  border-left: 0;
  border-top: 0;
  display: inline-block;

  transform: rotate(315deg);
`
