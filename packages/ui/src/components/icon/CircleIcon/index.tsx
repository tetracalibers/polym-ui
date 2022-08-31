import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { SpanComponentPropWithRef } from '../../../types/polymorphic/fixedAs'
import { PolymorphicRef } from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type CircleIconProps = Omit<
  SpanComponentPropWithRef<CharacterProps>,
  'children'
>

export type CircleIconComponent = (
  props: CircleIconProps
) => ReactElement | null

export const CircleIcon: CircleIconComponent = forwardRef(
  <As extends ElementType>(
    { ..._props }: CircleIconProps,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return <StyledElement {...props} ref={ref} />
  }
)
