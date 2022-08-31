import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../../../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type HorizontalCenterProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type HorizontalCenterComponent = <As extends ElementType>(
  props: HorizontalCenterProps<As>
) => ReactElement | null

export const HorizontalCenter: HorizontalCenterComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: HorizontalCenterProps<As>,
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
