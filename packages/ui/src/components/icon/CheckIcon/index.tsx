import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { SpanComponentPropWithRef } from '../../../types/polymorphic/fixedAs'
import { PolymorphicRef } from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type CheckIconProps = Omit<
  SpanComponentPropWithRef<CharacterProps>,
  'children'
>

export type CheckIconComponent = (props: CheckIconProps) => ReactElement | null

export const CheckIcon: CheckIconComponent = forwardRef(
  <As extends ElementType>(
    { ..._props }: CheckIconProps,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return <StyledElement {...props} ref={ref} />
  }
)
