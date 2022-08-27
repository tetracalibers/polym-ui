import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { TableComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

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
      <StyledElement {...props} ref={ref}>
        {children}
      </StyledElement>
    )
  }
)
