import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { SpanComponentPropWithRef } from '../../../types/polymorphic/fixedAs'
import { PolymorphicRef } from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type ArrowIconProps = Omit<
  SpanComponentPropWithRef<CharacterProps>,
  'children'
>

export type ArrowIconComponent = (props: ArrowIconProps) => ReactElement | null

export const ArrowIcon: ArrowIconComponent = forwardRef(
  <As extends ElementType>(
    { ..._props }: ArrowIconProps,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return <StyledElement {...props} ref={ref} />
  }
)
