import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { TableComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { Table } from './styled'
import { HorizontalStack } from '@polym-ui/layout'

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
        <HorizontalStack>
          <th>Heading Cell 1</th>
          <td>Data Cell 1</td>
          <td>Data Cell 1</td>
        </HorizontalStack>
        <tr>
          <th>Heading Cell 2</th>
          <td>Data Cell 2</td>
          <td>Data Cell 2</td>
        </tr>
        <tr>
          <th>Heading Cell 3</th>
          <td>Data Cell 3</td>
          <td>Data Cell 3</td>
        </tr>
        <tr>
          <th>Heading Cell 4</th>
          <td>Data Cell 4</td>
          <td>Data Cell 4</td>
        </tr>
        <tr>
          <th>Heading Cell 5</th>
          <td>Data Cell 5</td>
          <td>Data Cell 5</td>
        </tr>
      </Table>
    )
  }
)
