import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type CharLimitedTextareaProps<As extends ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type CharLimitedTextareaComponent = <As extends ElementType>(
  props: CharLimitedTextareaProps<As>
) => ReactElement | null

export const CharLimitedTextarea: CharLimitedTextareaComponent = forwardRef(
  <As extends ElementType>(
    { as, children, ..._props }: CharLimitedTextareaProps<As>,
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
