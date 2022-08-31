import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type AspectFrameProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type AspectFrameComponent = <As extends ElementType>(
  props: AspectFrameProps<As>
) => ReactElement | null

export const AspectFrame: AspectFrameComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: AspectFrameProps<As>,
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
