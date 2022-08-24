import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette } from 'styled-utility-first'

export const StyledElement = styled.div`
  width: 33px;
  height: 33px;
  border: 2px solid #333;
  border-left: 0;
  border-top: 0;

  transform: rotate(315deg);
`
