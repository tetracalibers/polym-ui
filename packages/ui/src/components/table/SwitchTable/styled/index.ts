import styled from 'styled-components'
import { BaseTable } from '../../mock/BaseTable'

export const LayoutTable = styled(BaseTable)`
  @media screen and (min-width: 48em) {
    & tbody {
      display: flex;
    }

    & tbody tr {
      display: block;
      box-sizing: border-box;
      flex: 1;
    }

    & tbody th,
    & tbody td {
      display: block;
      width: 100%;
      box-sizing: border-box;
    }
  }
`
