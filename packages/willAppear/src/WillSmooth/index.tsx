import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type WillSmoothProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type WillSmoothComponent = <As extends ElementType>(
  props: WillSmoothProps<As>
) => ReactElement | null

export const WillSmooth: WillSmoothComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: WillSmoothProps<As>,
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
