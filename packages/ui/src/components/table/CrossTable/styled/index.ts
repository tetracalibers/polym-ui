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

export const LayoutTable = styled(BaseTable)`
  & th,
  & td {
    white-space: nowrap;
  }

  & th {
    background-color: #e3e2ff;
    color: ${$.grayScale.dark}d9;
  }

  & thead th {
    /* 包含ブロックの上端に粘着表示 */
    position: sticky;
    top: 0;
    z-index: 1;
  }

  /* 左上の見出しセル */
  & thead th:first-child {
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #c2c2ff;
    color: ${$.grayScale.dark};
  }

  & tbody th {
    position: sticky;
    left: 0;
  }
`
