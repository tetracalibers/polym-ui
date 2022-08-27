import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type ToListTableProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type ToListTableComponent = <As extends ElementType>(
  props: ToListTableProps<As>
) => ReactElement | null

export const ToListTable: ToListTableComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: ToListTableProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} ref={ref} as={as as unknown as undefined}>
        {children}
      </StyledElement>
    )
  }
)
