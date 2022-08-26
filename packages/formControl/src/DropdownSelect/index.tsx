import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { SelectComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { Root, AutoComplete } from './styled'
import { ArrowIcon } from '@polym-ui/symbol'

export type DropdownSelectProps = SelectComponentPropWithRef<CharacterProps>

export type DropdownSelectComponent = (
  props: DropdownSelectProps
) => ReactElement | null

export const DropdownSelect: DropdownSelectComponent = forwardRef(
  (
    { children, ..._props }: DropdownSelectProps,
    ref?: PolymorphicRef<'select'>
  ) => {
    const props = _.mergeWith(_props, defaultProps, (input, defaul) =>
      _.isUndefined(input) ? defaul : input
    )
    const { name, ...other } = props
    return (
      <Root>
        <label>
          label
          <select name={name} aria-hidden='true' tabIndex={-1} ref={ref}>
            <option value=''>Please choose</option>
            <option value='1'>choices 01</option>
            <option value='2'>choices 02</option>
            <option value='3'>choices 03</option>
            <option value='4'>choices 04</option>
            <option value='5'>choices 05</option>
          </select>
        </label>
        <AutoComplete>
          <input
            aria-owns={`autocomplete-options--${name}`}
            autoCapitalize='none'
            type='text'
            autoComplete='off'
            aria-autocomplete='list'
            role='combobox'
            id={name}
            aria-expanded={false}
          />
          <ArrowIcon />
        </AutoComplete>
      </Root>
    )
  }
)
