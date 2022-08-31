import styled from 'styled-components'
import { ColorPalette } from 'styled-utility-first'

export const StyledInput = styled.input`
  && {
    appearance: none;
    width: 100%;
    max-width: 300px;
    padding: 11px 12px 12px 9px;
    box-sizing: border-box;
    outline: none;
    height: 38px;
    border-radius: 4px;
    border: 1px solid ${ColorPalette.pastel.purple};
    /* 16px以上を推奨 */
    font-size: 16px;
    line-height: 19px;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: 2px solid ${ColorPalette.pastel.water};
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`
