import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { InputComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledElement } from './styled'

// childrenを除外
export type GenericInputProps = Omit<
  InputComponentPropWithRef<CharacterProps>,
  'children'
>

export type GenericInputComponent = (
  props: GenericInputProps
) => ReactElement | null

export const GenericInput: GenericInputComponent = forwardRef(
  <As extends ElementType>(
    { ..._props }: GenericInputProps,
    ref?: PolymorphicRef<As>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return <StyledElement {...props} ref={ref} />
  }
)
