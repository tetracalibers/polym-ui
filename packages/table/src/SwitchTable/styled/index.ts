import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'
import { BaseTable } from '../../mock/BaseTable'

export const Table = styled(BaseTable)`
  display: flex;

  & tr {
    display: block;
    width: 20%;
    box-sizing: border-box;
  }

  & th,
  & td {
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
`
