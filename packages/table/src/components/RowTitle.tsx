import { forwardRef, ReactElement } from 'react'
import { ThComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'

export type RowTitleProps = ThComponentPropWithRef

export type RowTitleComponent = (props: RowTitleProps) => ReactElement | null

export const RowTitle: RowTitleComponent = forwardRef(
  ({ children, ...props }: RowTitleProps, ref?: PolymorphicRef<'th'>) => {
    return (
      <th {...props} ref={ref}>
        {children}
      </th>
    )
  }
)
