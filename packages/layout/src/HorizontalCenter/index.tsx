import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { DivComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type HorizontalCenterProps = DivComponentPropWithRef<CharacterProps>

export type HorizontalCenterComponent = (
  props: HorizontalCenterProps
) => ReactElement | null

export const HorizontalCenter: HorizontalCenterComponent = forwardRef(
  <As extends ElementType>(
    { children, ..._props }: HorizontalCenterProps,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} ref={ref}>
        {children}
      </StyledElement>
    )
  }
)
