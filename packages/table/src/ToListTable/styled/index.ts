import styled from 'styled-components'
import { BaseTable } from '../../mock/BaseTable'

export const LayoutTable = styled(BaseTable)`
  & tbody tr {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }

  & tbody tr td,
  & tbody tr th {
    flex-grow: 1;
    flex-basis: calc((30em - 100%) * 999);
  }
`
