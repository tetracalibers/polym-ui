import styled, { css } from 'styled-components'
import { CharacterProps } from '../model/props'
import { match } from 'ts-pattern'
import { ColorPalette as $, Truthy } from 'styled-utility-first'
import { BaseTable } from '../../mock/BaseTable'

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: auto;
`

export const Table = styled(BaseTable)`
  & th,
  & td {
    white-space: nowrap;
  }
`
