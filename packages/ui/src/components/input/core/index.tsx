import _ from 'lodash'
import { ElementType, forwardRef, ReactElement } from 'react'
import { InputComponentPropWithRef } from '../../../types/polymorphic/fixedAs'
import { PolymorphicRef } from '../../../types/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledInput } from './styled'

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
    const { label, id } = props
    return (
      <label>
        {label}
        <StyledInput {...props} ref={ref} id={id} />
      </label>
    )
  }
)
