import { ColorPalette as $, Truthy } from 'styled-utility-first'
import styled, { css } from 'styled-components'

export const BaseTable = styled.table`
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
