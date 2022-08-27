import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'

export const BaseTable = styled.table<CharacterProps>`
  & {
    width: 100%;
    border-collapse: collapse;
  }

  & th,
  & td {
    padding: 1em;
    background-color: white;
    color: ${$.grayScale.dark};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px,
      rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;
  }

  & th {
    background-color: ${$.grayScale.dark};
    color: ${$.grayScale.light};
    padding-left: 1em;
  }
`

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
