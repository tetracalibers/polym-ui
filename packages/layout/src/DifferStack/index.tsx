import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type DifferStackProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type DifferStackComponent = <As extends ElementType>(
  props: DifferStackProps<As>
) => ReactElement | null

export const DifferStack: DifferStackComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: DifferStackProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} ref={ref} as={as || 'div'}>
        {children}
      </StyledElement>
    )
  }
)
