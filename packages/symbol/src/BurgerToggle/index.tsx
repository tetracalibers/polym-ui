import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type BurgerToggleProps<As extends ElementType> = Omit<
  PolymorphicComponentPropWithRef<As, CharacterProps>,
  'children'
>

export type BurgerToggleComponent = <As extends ElementType>(
  props: BurgerToggleProps<As>
) => ReactElement | null

export const BurgerToggle: BurgerToggleComponent = forwardRef(
  <As extends ElementType>(
    { as, ..._props }: BurgerToggleProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} ref={ref} as={as as unknown as undefined} />
    )
  }
)
