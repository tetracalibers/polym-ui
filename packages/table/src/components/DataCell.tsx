import { forwardRef, ReactElement } from 'react'
import { TdComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'

export type DataCellProps = TdComponentPropWithRef

export type DataCellComponent = (props: DataCellProps) => ReactElement | null

export const DataCell: DataCellComponent = forwardRef(
  ({ children, ...props }: DataCellProps, ref?: PolymorphicRef<'td'>) => {
    return (
      <td {...props} ref={ref}>
        {children}
      </td>
    )
  }
)
