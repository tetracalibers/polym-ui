import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

export const Root = styled.div`
  position: relative;
  height: 38px;
`

export const Select = styled.select<CharacterProps>`
  appearance: none;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid ${$.pastel.purple};
  border-radius: 5px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 12px;
`
