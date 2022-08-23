import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'

export const StyledElement = styled.input`
  &[type='text'] {
    appearance: none;
    width: 100%;
    max-width: 300px;
    padding: 11px 12px 12px 9px;
    box-sizing: border-box;
    outline: none;
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ccc;
    /* 16px以上を推奨 */
    font-size: 16px;
    line-height: 19px;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &[type='number'] {
      -moz-appearance: textfield;
    }
  }
`
