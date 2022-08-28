import styled from 'styled-components'
import { BaseTable } from '../../mock/BaseTable'

export const Wrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`

export const LayoutTable = styled(BaseTable)`
  & tbody th,
  & tbody td {
    white-space: nowrap;
  }
`
