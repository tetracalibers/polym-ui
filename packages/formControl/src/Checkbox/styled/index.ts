import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'

export const StyledInput = styled.input<CharacterProps>`
  /* 透明にして見えなくする */
  opacity: 0;
  /* 本来の配置から切り離す */
  position: absolute;
`

export const StyledLabel = styled.label`
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`

export const ClickArea = styled.span`
  display: inline-block;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid ${ColorPalette.pastel.purple};
  background-color: #fff;
  border-radius: 2px;
`

export const IconWrapper = styled.span`
  display: inline-block;
  padding-bottom: 50%;
  padding-left: 15%;
`
