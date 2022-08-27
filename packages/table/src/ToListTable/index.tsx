import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { TableComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { Table } from './styled'

export type ToListTableProps = TableComponentPropWithRef<CharacterProps>

export type ToListTableComponent = (
  props: ToListTableProps
) => ReactElement | null

export const ToListTable: ToListTableComponent = forwardRef(
  (
    { children, ..._props }: ToListTableProps,
    ref?: PolymorphicRef<'table'>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <Table {...props} ref={ref}>
        <tr>
          <th>見出しセル1</th>
          <td>データセル1</td>
          <td>データセル1</td>
        </tr>
        <tr>
          <th>見出しセル2</th>
          <td>データセル2</td>
          <td>データセル2</td>
        </tr>
        <tr>
          <th>見出しセル3</th>
          <td>データセル3</td>
          <td>データセル3</td>
        </tr>
        <tr>
          <th>見出しセル4</th>
          <td>データセル4</td>
          <td>データセル4</td>
        </tr>
        <tr>
          <th>見出しセル5</th>
          <td>データセル5</td>
          <td>データセル5</td>
        </tr>
      </Table>
    )
  }
)
