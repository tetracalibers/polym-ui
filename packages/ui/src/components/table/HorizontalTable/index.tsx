import _ from 'lodash'
import { ReactElement, ReactNode } from 'react'
import { TableComponentProp } from '../../../types/polymorphic/fixedAs'
import { CharacterProps, defaultProps } from './model/props'
import { LayoutTable, Wrapper } from './styled'
import { Table } from '../core/Table'
import { generateTableData } from '../mock/data'

export type HorizontalTableProps = TableComponentProp<CharacterProps>

export type HorizontalTableComponent = (
  props: HorizontalTableProps
) => ReactElement

const testData = generateTableData()

export const HorizontalTable: HorizontalTableComponent = ({
  children,
  ..._props
}: HorizontalTableProps) => {
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
