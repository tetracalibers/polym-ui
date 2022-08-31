import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { SpanComponentPropWithRef } from '../../../types/polymorphic/fixedAs'
import { PolymorphicRef } from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type HeartIconProps = Omit<
  SpanComponentPropWithRef<CharacterProps>,
  'children'
>

export type HeartIconComponent = (props: HeartIconProps) => ReactElement | null

export const HeartIcon: HeartIconComponent = forwardRef(
  <As extends ElementType>(
    { ..._props }: HeartIconProps,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return <StyledElement {...props} ref={ref} />
  }
)
