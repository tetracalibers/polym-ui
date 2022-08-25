import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette, Truthy } from 'styled-utility-first'

// widthはheightの0.5倍
export const StyledElement = styled.div<CharacterProps>`
  && {
    width: 19px;
    height: 33px;
    border: 2px solid #333;
    border-left: 0;
    border-top: 0;

    transform: rotate(45deg);
  }
`
