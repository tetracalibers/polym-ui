import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type CenteringProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type CenteringComponent = <As extends ElementType>(
  props: CenteringProps<As>
) => ReactElement | null

export const Centering: CenteringComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: CenteringProps<As>,
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