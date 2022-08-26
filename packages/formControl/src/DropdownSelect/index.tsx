import _ from 'lodash'
import {
  FormEvent,
  forwardRef,
  KeyboardEvent,
  ReactElement,
  SyntheticEvent,
  useReducer,
  useRef,
  useState,
} from 'react'
import { SelectComponentPropWithRef } from '../common/polymorphic/fixedAs'
import { PolymorphicRef } from '../common/polymorphic/standard'
import { CharacterProps, ChoiceItem, defaultProps } from './model/props'
import { Root, AutoComplete, InputControl, SelectList } from './styled'
import { ArrowIcon } from '@polym-ui/symbol'
import { Hidden, VisuallyHidden } from '@polym-ui/a11y-helper'
import { match } from 'ts-pattern'

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
    // prettier-ignore
    const { name, choices, initialValue, onSelect, placeholder, ...other } = props
    const initialItem = choices.find(item => item.value === initialValue)

    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState(initialItem)
    const inputEref = useRef<HTMLInputElement>(null)

    // クリックした時にドロップダウンを開閉
    const toggleOpenByClick = (e: SyntheticEvent) => {
      setIsOpen(!isOpen)
      e.stopPropagation()
    }

    // 選択時
    const selectValue = (e: FormEvent<HTMLLIElement>, item: ChoiceItem) => {
      e.stopPropagation()
      setSelectedItem(item)
      setIsOpen(false)
      // propsで指定された処理を実行
      onSelect && onSelect(item)
    }

    const onTextBoxType = () => {
      const inputStringLength = inputEref?.current?.value.trim().length
      // ユーザが何かを入力した時のみ
      if (typeof inputStringLength === 'number' && inputStringLength > 0) {
        // TODO フィルタリング
        // メニューを表示
        setIsOpen(true)
        // TODO ライブリージョンを更新
      }
      // TODO セレクトボックスの値を更新
    }

    const onTextBoxKeyup = (e: KeyboardEvent<HTMLInputElement>) => {
      const key = e.key
      match(key)
        .with(
          'Escape',
          'ArrowUp',
          'ArrowLeft',
          'ArrowRight',
          ' ',
          'Enter',
          'Tab',
          'Shift',
          () => {
            // メニューが短時間表示されてしまわないよう、これらのキーは無視
          }
        )
        .with('ArrowDown', () => {
          setIsOpen(true)
          e.stopPropagation()
        })
        .otherwise(() => {
          onTextBoxType()
        })
    }

    // Tabによってフォーカスを外した時にメニュー非表示
    const unfocusByTab = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Tab') {
        setIsOpen(false)
      }
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
              placeholder={selectedItem?.label ?? placeholder}
              onKeyUp={onTextBoxKeyup}
              onKeyDown={unfocusByTab}
              ref={inputEref}
            />
            <ArrowIcon direction={isOpen ? 'up' : 'down'} />
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
