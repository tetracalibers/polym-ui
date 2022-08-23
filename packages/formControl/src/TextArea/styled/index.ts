import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette } from 'styled-utility-first'

export const StyledElement = styled.textarea`
  color: ${ColorPalette.grayScale.dark};
  border: 1px solid ${ColorPalette.pastel.purple};
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  line-height: 24px;
  padding: 9px 12px 10px 12px;
  resize: none;
  overflow: auto;
  height: auto;
  background-color: white;
`
