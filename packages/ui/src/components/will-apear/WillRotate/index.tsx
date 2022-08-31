import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type WillRotateProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type WillRotateComponent = <As extends ElementType>(
  props: WillRotateProps<As>
) => ReactElement | null

export const WillRotate: WillRotateComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: WillRotateProps<As>,
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
