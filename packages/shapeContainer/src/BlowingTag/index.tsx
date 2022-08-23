import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type BlowingTagProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type BlowingTagComponent = <As extends ElementType>(
  props: BlowingTagProps<As>
) => ReactElement | null

export const BlowingTag: BlowingTagComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: BlowingTagProps<As>,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledElement {...props} as={as as unknown as undefined} ref={ref}>
        {children}
      </StyledElement>
    )
  }
)
