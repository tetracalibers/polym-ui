import _ from 'lodash'
import { forwardRef, ReactElement } from 'react'
import { SelectComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, defaultProps } from './model/props'
import { Root, AutoComplete } from './styled'
import { ArrowIcon } from '@polym-ui/symbol'
import { Hidden, VisuallyHidden } from '@polym-ui/a11y-helper'

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
        {/* id={name}であるテキストボックスと関連づけ（SRで読み上げ） */}
        <label htmlFor={name}>label</label>
        {/* 値をサーバに送るためのname属性 */}
        <VisuallyHidden
          as='select'
          name={name}
          aria-hidden='true'
          tabIndex={-1}
          ref={ref}
        >
          <option value=''>Please choose</option>
          <option value='1'>choices 01</option>
          <option value='2'>choices 02</option>
          <option value='3'>choices 03</option>
          <option value='4'>choices 04</option>
          <option value='5'>choices 05</option>
        </VisuallyHidden>
        <AutoComplete>
          {/* このinputBoxの値はサーバには送らないため、name属性は不要 */}
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
          <ArrowIcon direction='down' />
          <Hidden as='ul' id={`autocomplete-options--${name}`} role='listbox'>
            <li
              data-option-value='1'
              role='option'
              tabIndex={-1}
              aria-selected={false}
              id={'autocomplete_1'}
            >
              choices 01
            </li>
            <li
              data-option-value='2'
              role='option'
              tabIndex={-1}
              aria-selected={false}
              id={'autocomplete_2'}
            >
              choices 02
            </li>
            <li
              data-option-value='3'
              role='option'
              tabIndex={-1}
              aria-selected={false}
              id={'autocomplete_3'}
            >
              choices 03
            </li>
            <li
              data-option-value='4'
              role='option'
              tabIndex={-1}
              aria-selected={false}
              id={'autocomplete_4'}
            >
              choices 04
            </li>
            <li
              data-option-value='5'
              role='option'
              tabIndex={-1}
              aria-selected={false}
              id={'autocomplete_5'}
            >
              choices 05
            </li>
          </Hidden>
          {/* メニューに候補が表示されたら、その候補数を通知する */}
          <VisuallyHidden aria-live='polite' role='status'>
            5 candidates
          </VisuallyHidden>
        </AutoComplete>
      </Root>
    )
  }
)
