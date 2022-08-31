import _ from 'lodash'
import { ReactElement, ReactNode } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import { LayoutTable, Wrapper } from './styled'
import { generateTableData } from '../mock/data'
import { Table } from '../core/Table'
import { TableComponentProp } from '../../../types/polymorphic/fixedAs'

export type CrossTableProps = TableComponentProp<CharacterProps>

export type CrossTableComponent = (props: CrossTableProps) => ReactElement

const testData = generateTableData(10, 6)

export const CrossTable: CrossTableComponent = ({
  children,
  ..._props
}: CrossTableProps) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  return (
    <Wrapper>
      <Table
        {...props}
        data={testData}
        Thead={() => (
          <thead>
            <tr>
              <th>Title</th>
              <th>Heading</th>
              <th>Heading</th>
              <th>Heading</th>
              <th>Heading</th>
              <th>Heading</th>
              <th>Heading</th>
            </tr>
          </thead>
        )}
        format={{
          table: (children: ReactNode) => <LayoutTable>{children}</LayoutTable>,
        }}
      />
    </Wrapper>
  )
}
