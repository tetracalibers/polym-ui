import React, { forwardRef } from 'react'
import { CharacterProps, defaultProps } from './model/props'
import {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from '../common/polymorphic'
import { StyledElement } from './styled'
import _ from 'lodash'

export type PointedTagProps<As extends React.ElementType> =
  PolymorphicComponentPropWithRef<As, CharacterProps>

export type PointedTagComponent = <As extends React.ElementType>(
  props: PointedTagProps<As>
) => React.ReactElement | null

export const PointedTag: PointedTagComponent = forwardRef(
  <As extends React.ElementType>(
    { as, children, ..._props }: PointedTagProps<As>,
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
