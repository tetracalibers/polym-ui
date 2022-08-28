import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'
import { BaseTable } from '../../mock/BaseTable'

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const Table = styled(BaseTable)`
  display: flex;
  width: 100%;

  & tr {
    display: block;
    box-sizing: border-box;
    flex: 1;
  }

  & th,
  & td {
    display: block;
    width: 100%;
    box-sizing: border-box;
    white-space: nowrap;
  }
`
