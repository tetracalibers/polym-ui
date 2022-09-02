import styled from 'styled-components'
import { ColorPalette as $ } from 'styled-utility-first'

export const STyledInput = styled.input`
  && {
    appearance: none;
    width: 100%;
    max-width: 300px;
    padding: 11px 12px 12px 9px;
    box-sizing: border-box;
    outline: none;
    height: 38px;
    border-radius: 4px;
    border: 1px solid ${$.pastel.purple};
    /* 16px以上を推奨 */
    font-size: 16px;
    line-height: 19px;
  }

  &:focus {
    outline: 2px solid ${$.pastel.water};
  }
`
