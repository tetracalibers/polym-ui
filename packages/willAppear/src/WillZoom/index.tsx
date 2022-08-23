import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type WillZoomProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type WillZoomComponent = <As extends ElementType>(
  props: WillZoomProps<As>
) => ReactElement | null

export const WillZoom: WillZoomComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: WillZoomProps<As>,
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
