import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type VisuallyHiddenProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type VisuallyHiddenComponent = <As extends ElementType>(
  props: VisuallyHiddenProps<As>
) => ReactElement | null

export const VisuallyHidden: VisuallyHiddenComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: VisuallyHiddenProps<As>,
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
