import _ from 'lodash'
import { ReactElement, ReactNode } from 'react'
import { TableComponentProp } from '../common/polymorphic/fixedAs'
import { CharacterProps, defaultProps } from './model/props'
import { LayoutTable } from './styled'
import { Table } from '../core/Table'
import { generateTableData } from '../mock/data'

export type ToListTableProps = TableComponentProp<CharacterProps>

export type ToListTableComponent = (props: ToListTableProps) => ReactElement

const testData = generateTableData()

export const ToListTable: ToListTableComponent = ({
  children,
  ..._props
}: ToListTableProps) => {
  const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
    _.isUndefined(input) ? defaul : input
  )
  return (
    <Table
      {...props}
      data={testData}
      format={{
        table: (children: ReactNode) => <LayoutTable>{children}</LayoutTable>,
      }}
    />
  )
}
