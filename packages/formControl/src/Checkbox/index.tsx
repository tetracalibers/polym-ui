import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { InputComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { StyledInput, StyledLabel } from './styled'
import { CheckIcon } from '@polym-ui/symbol'

export type CheckboxProps = Omit<
  InputComponentPropWithRef<CharacterProps>,
  'type'
>

export type CheckboxComponent = (props: CheckboxProps) => ReactElement | null

export const Checkbox: CheckboxComponent = forwardRef(
  (
    { children, name, value, ..._props }: CheckboxProps,
    ref?: PolymorphicRef<'input'>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    return (
      <StyledLabel>
        <StyledInput
          {...props}
          ref={ref}
          type='checkbox'
          name={name}
          value={value}
        />
        <CheckIcon />
        <span>{children}</span>
      </StyledLabel>
    )
  }
)
