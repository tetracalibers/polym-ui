import styled from 'styled-components'
import { BaseTable } from '../../mock/BaseTable'

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const LayoutTable = styled(BaseTable)`
  & tbody {
    display: flex;
    width: 100%;
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
    white-space: nowrap;
  }
`
