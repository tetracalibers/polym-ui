import _ from 'lodash'
import {
  FormEvent,
  forwardRef,
  ReactElement,
  SyntheticEvent,
  useReducer,
  useState,
} from 'react'
import { SelectComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, ChoiceItem, defaultProps } from './model/props'
import { Root, AutoComplete, InputControl, SelectList } from './styled'
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
    const { name, choices, initialValue, onSelect, ...other } = props
    const initialItem = choices.find(item => item.value === initialValue)

    const [isOpen, toggleOpen] = useReducer((flag: boolean) => !flag, false)
    const [selectedItem, setSelectedItem] = useState(initialItem)

    // クリックした時にドロップダウンを開閉
    const toggleOpenByClick = (e: SyntheticEvent) => {
      toggleOpen()
      e.stopPropagation()
    }

    // 選択時
    const selectValue = (e: FormEvent<HTMLLIElement>, item: ChoiceItem) => {
      e.stopPropagation()
      setSelectedItem(item)
      toggleOpen()
      // propsで指定された処理を実行
      onSelect && onSelect(item)
    }

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
          value={selectedItem?.value}
        >
          {choices.map((item, idx) => (
            <option value={item.value} key={`${name}_choice${idx + 1}`}>
              {item.label ?? item.value}
            </option>
          ))}
        </VisuallyHidden>
        <AutoComplete>
          <InputControl
            onMouseDown={toggleOpenByClick}
            onTouchEnd={toggleOpenByClick}
          >
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
              value={selectedItem?.label ?? ''}
            />
            <ArrowIcon direction='down' />
          </InputControl>
          {isOpen && (
            <SelectList id={`autocomplete-options--${name}`} role='listbox'>
              {choices.map((item, idx) => (
                <li
                  data-option-value={item.value}
                  key={`${name}_choice${idx + 1}`}
                  role='option'
                  tabIndex={-1}
                  aria-selected={false}
                  id={`autocomplete_${item.value}`}
                  onClick={e => selectValue(e, item)}
                  onMouseDown={e => selectValue(e, item)}
                >
                  {item.label ?? item.value}
                </li>
              ))}
            </SelectList>
          )}
          {/* メニューに候補が表示されたら、その候補数を通知する */}
          <VisuallyHidden aria-live='polite' role='status'>
            {choices.length} candidates
          </VisuallyHidden>
        </AutoComplete>
      </Root>
    )
  }
)
