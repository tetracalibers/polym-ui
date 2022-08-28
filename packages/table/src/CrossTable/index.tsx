import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { TableComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { Table, Wrapper } from './styled'
import { VerticalStack } from '@polym-ui/layout'

export type CrossTableProps = TableComponentPropWithRef<CharacterProps>

export type CrossTableComponent = (
  props: CrossTableProps
) => ReactElement | null

export const CrossTable: CrossTableComponent = forwardRef(
  ({ children, ..._props }: CrossTableProps, ref?: PolymorphicRef<'table'>) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <Wrapper>
        <Table {...props} ref={ref}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Heading Row</th>
              <th>Heading Row</th>
              <th>Heading Row</th>
              <th>Heading Row</th>
              <th>Heading Row</th>
              <th>Heading Row</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
            <tr>
              <th>Heading Column</th>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
              <td>Data Cell</td>
            </tr>
          </tbody>
        </Table>
      </Wrapper>
    )
  }
)
