import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type WillBlurProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type WillBlurComponent = <As extends ElementType>(
  props: WillBlurProps<As>
) => ReactElement | null

export const WillBlur: WillBlurComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: WillBlurProps<As>,
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
