import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { TableComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { Table, Wrapper } from './styled'
import { HorizontalStack } from '@polym-ui/layout'

export type HorizontalTableProps = TableComponentPropWithRef<CharacterProps>

export type HorizontalTableComponent = (
  props: HorizontalTableProps
) => ReactElement | null

export const HorizontalTable: HorizontalTableComponent = forwardRef(
  (
    { children, ..._props }: HorizontalTableProps,
    ref?: PolymorphicRef<'table'>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <Wrapper>
        <Table {...props} ref={ref}>
          <tr>
            <th>Heading Cell 1</th>
            <td>Data Cell 1</td>
            <td>Data Cell 1</td>
          </tr>
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
      </Wrapper>
    )
  }
)
