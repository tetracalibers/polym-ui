import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

export const StyledSelect = styled.select<CharacterProps>`
  appearance: none;
  display: block;
  width: 100%;
  padding: 10px 30px 8px 10px;
  border-radius: 4px;
  border: 1px solid;
`
