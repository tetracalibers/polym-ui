import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { DivComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type BurgerToggleProps = Omit<
  DivComponentPropWithRef<CharacterProps>,
  'children'
>

export type BurgerToggleComponent = (
  props: BurgerToggleProps
) => ReactElement | null

export const BurgerToggle: BurgerToggleComponent = forwardRef(
  <As extends ElementType>(
    { ..._props }: BurgerToggleProps,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return <StyledElement {...props} ref={ref} />
  }
)
