import { forwardRef, ReactElement } from 'react'
import { TrComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'

export type RowProps = TrComponentPropWithRef

export type RowComponent = (props: RowProps) => ReactElement | null

export const Row: RowComponent = forwardRef(
  ({ children, ...props }: RowProps, ref?: PolymorphicRef<'tr'>) => {
    return (
      <tr {...props} ref={ref}>
        {children}
      </tr>
    )
  }
)
