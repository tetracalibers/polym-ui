import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type SwitchTableProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type SwitchTableComponent = <As extends ElementType>(
  props: SwitchTableProps<As>
) => ReactElement | null

export const SwitchTable: SwitchTableComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: SwitchTableProps<As>,
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
