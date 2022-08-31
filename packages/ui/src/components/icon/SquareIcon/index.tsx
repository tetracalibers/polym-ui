import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { DivComponentPropWithRef } from '../../../types/polymorphic/fixedAs'
import { PolymorphicRef } from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

export type SquareIconProps = Omit<
  DivComponentPropWithRef<CharacterProps>,
  'children'
>

export type SquareIconComponent = (
  props: SquareIconProps
) => ReactElement | null

export const SquareIcon: SquareIconComponent = forwardRef(
  <As extends ElementType>(
    { ..._props }: SquareIconProps,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return <StyledElement {...props} ref={ref} />
  }
)
