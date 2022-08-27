import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'
import { BaseTable } from '../../mock/BaseTable'

export const Table = styled(BaseTable)`
  tr {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  tr td,
  tr th {
    flex-grow: 1;
    flex-basis: calc((30em - 100%) * 999);
  }
`
