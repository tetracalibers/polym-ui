import _ from 'lodash'
import { ReactElement, ReactNode } from 'react'
import { TableComponentProp } from '../common/polymorphic/fixedAs'
import { CharacterProps, defaultProps } from './model/props'
import { LayoutTable, Wrapper } from './styled'
import { Table } from '../core/Table'
import { generateTableData } from '../mock/data'

export type VerticalTableProps = TableComponentProp<CharacterProps>

export type VerticalTableComponent = (props: VerticalTableProps) => ReactElement

const testData = generateTableData()

export const VerticalTable: VerticalTableComponent = ({
  children,
  ..._props
}: VerticalTableProps) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  return (
    <Wrapper>
      <Table
        {...props}
        data={testData}
        format={{
          table: (children: ReactNode) => <LayoutTable>{children}</LayoutTable>,
        }}
      />
    </Wrapper>
  )
}
