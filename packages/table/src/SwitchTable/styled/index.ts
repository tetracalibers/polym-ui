import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'
import { BaseTable } from '../../mock/BaseTable'

export const Table = styled(BaseTable)`
  @media screen and (min-width: 48em) {
    display: flex;

    & tr {
      display: block;
      /* TODO 100% / 要素数 で計算したい */
      width: 20%;
      box-sizing: border-box;
    }

    & th,
    & td {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  }
`
