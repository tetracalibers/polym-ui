import _ from 'lodash'
import { useRef } from 'react'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { IconOnly } from '../../core/IconOnly'
import { ChoiceItem } from '../../DropdownSelect/model/props'
import { AutoComplete, Root, SelectList } from '../../DropdownSelect/styled'
import { useCombobox } from './useCombobox'
import { VscChevronDown } from 'react-icons/vsc'

export type ComboBoxProps = {
  choices: ChoiceItem[]
  label: string
}

export const ComboBox = ({ choices, label }: ComboBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const { isOpen, selectedItem, attr, inputId, visibleItems } = useCombobox({
    choices,
    inputRef,
    rootRef,
    listRef,
  })

  const name = _.snakeCase(label)
  const getItemKey = (value: string | number) =>
    `${name}__${_.snakeCase(value.toString())}`

  return (
    <Root {...attr.root}>
      {/* テキストボックスと関連づけ（SRで読み上げ） */}
      <label htmlFor={inputId}>
        <VisuallyHidden>{label}</VisuallyHidden>
      </label>
      {/* 値をサーバに送るためのname属性 */}
      <VisuallyHidden
        as='select'
        aria-hidden='true'
        name={name}
        tabIndex={-1}
        value={selectedItem?.value}
      >
        {choices.map(item => (
          <option value={item.value} key={getItemKey(item.value)}>
            {item.label ?? item.value}
          </option>
        ))}
      </VisuallyHidden>
      <AutoComplete>
        {/* このinputBoxの値はサーバには送らないため、name属性は不要 */}
        <input {...attr.input} />
        <IconOnly.Button
          icon={<VscChevronDown />}
          label={isOpen ? 'close' : 'open'}
          data-open={isOpen}
          {...attr.arrowIcon}
        />
        {isOpen && (
          <>
            <SelectList {...attr.list}>
              {visibleItems.map(item => (
                <li {...attr.listItem} key={getItemKey(item.value)}>
                  {item.label ?? item.value}
                </li>
              ))}
            </SelectList>
            {/* メニューに候補が表示されたら、その候補数を通知する */}
            <VisuallyHidden aria-live='polite' role='status'>
              {visibleItems.length} items displayed
            </VisuallyHidden>
          </>
        )}
      </AutoComplete>
    </Root>
  )
}
