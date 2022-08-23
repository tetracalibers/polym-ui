import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { ElementType } from 'react'
import { match } from 'ts-pattern'

export const StyledElement = styled.input`
  &[type='text'] {
    appearance: none;
    width: 100%;
    max-width: 300px;
    padding: 10px 20px 8px 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1) inset;
    /* 16px以上を推奨 */
    font-size: 16px;
  }
`
