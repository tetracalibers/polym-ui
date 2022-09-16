import _ from 'lodash'
import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  KeyboardEvent,
  ReactElement,
  SyntheticEvent,
  useRef,
  useState,
} from 'react'
import { CharacterProps, ChoiceItem, defaultProps } from './model/props'
import { Root, AutoComplete, SelectList } from './styled'
import { match } from 'ts-pattern'
import { useInput, useUnFocus } from '@polym/hooks'
import { PolymorphicRef } from '../../types/polymorphic/standard'
import { VisuallyHidden } from '../a11y-helper/VisuallyHidden'
import { VscChevronDown } from 'react-icons/vsc'
import { IconOnly } from '../core/IconOnly'

export type DropdownSelectProps = CharacterProps &
  ComponentPropsWithoutRef<'select'>

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
    const [activeItemIdx, setActiveItemIdx] = useState(-1)
    const [visibleItems, setVisibleItems] = useState(choices as ChoiceItem[])

    const onInput = (value: string) => {
      const filterd = filtering(value)
      setVisibleItems(filterd)
      setIsOpen(true)
    }
    const [typedText, onTyping] = useInput(initialItem?.label, onInput)

    const inputEref = useRef<HTMLInputElement>(null)
    const thisComponentEref = useRef<HTMLDivElement>(null)
    const listEref = useRef<HTMLUListElement>(null)

    // unfocus時に非表示
    const unfocusByTab = useUnFocus(() => setIsOpen(false), thisComponentEref)

    // クリックした時にドロップダウンを開く
    const openByClick = (e: SyntheticEvent) => {
      setIsOpen(true)
      e.stopPropagation()
    }

    // クリックした時にドロップダウンを開閉
    const toggleOpenByClick = (e: SyntheticEvent) => {
      setIsOpen(!isOpen)
      e.stopPropagation()
    }

    // フィルタリング
    const filtering = (inputStr: string) => {
      return choices.filter(choice => {
        return `${choice.label}`
          .trim()
          .toLowerCase()
          .includes(inputStr.trim().toLowerCase())
      })
    }

    const isHidden = (el: HTMLElement) => el.offsetParent === null

    const highlightOption = (newOptionE: HTMLElement) => {
      // オプションがメニュー内に表示されていない場合
      if (isHidden(newOptionE)) {
        if (newOptionE.parentElement) {
          // その位置をメニュー内に設定して表示されるようにする
          newOptionE.parentElement.scrollTop =
            newOptionE.parentElement.scrollTop + newOptionE.offsetTop
        }
      }
      newOptionE.focus()
    }

    /* -------------------------------------------- */
    /* FOCUS ON INPUT                               */
    /* -------------------------------------------- */

    const isEmptyValue = (value: ChoiceItem['value']) => {
      return `${value}`.trim().length === 0
    }

    const isExactMatch = (value: ChoiceItem['value']) => {
      return !!_.find(choices, (choice: ChoiceItem) => choice.value === value)
    }

    // 下矢印キーを押すとメニューに移動
    const onTextBoxArrowDownPress = (_e: KeyboardEvent<HTMLInputElement>) => {
      if (inputEref.current) {
        const inputValue = inputEref.current.value.trim()
        if (isEmptyValue(inputValue) || isExactMatch(inputValue)) {
          // 値が空orオプションの一つと完全にマッチする場合は、メニュー全体を表示
          setVisibleItems(choices)
        } else {
          // 値が部分的にマッチする場合、マッチするオプションを表示
          const filterd = filtering(inputValue)
          setVisibleItems(filterd)
        }
        setIsOpen(true)
        // 最初のオプションをハイライト
        const firstOptionE = listEref.current?.childNodes[0] as HTMLElement
        firstOptionE && highlightOption(firstOptionE)
      }
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
          onTextBoxArrowDownPress(e)
        })
        .otherwise(() => {
          //onTyping()
        })
    }

    /* -------------------------------------------- */
    /* CLICK LIST                                   */
    /* -------------------------------------------- */

    const runSelectiveProcess = (item: ChoiceItem) => {
      // フィルタリング処理を含むonInputは実行しないため、falseを設定
      onTyping(item.label!, false)
      setSelectedItem(item)
      setIsOpen(false)
      // propsで指定された処理を実行
      onSelect && onSelect(item)
    }

    // 選択時
    const onSelectInList = (e: FormEvent<HTMLUListElement>) => {
      e.preventDefault()
      if (e.target === listEref.current) return
      const list = e.target as Element
      const idx = list.attributes.getNamedItem('data-idx')?.value
      if (idx !== undefined) {
        const item = visibleItems[+idx]
        runSelectiveProcess(item)
      }
    }

    // フォーカス時
    const onFocusInList = (e: FormEvent<HTMLUListElement>) => {
      e.stopPropagation()
      if (e.target === listEref.current) return
      const list = e.target as Element
      const idx = list.attributes.getNamedItem('data-idx')?.value
      if (!_.isUndefined(idx)) {
        setActiveItemIdx(+idx)
      }
    }

    /* -------------------------------------------- */
    /* FOCUS ON LIST                                */
    /* -------------------------------------------- */

    const onMenuKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
      if (listEref.current) {
        const optionElements = listEref.current?.childNodes
        match(e.key)
          .with('ArrowUp', () => {
            // 最初のオプションがフォーカスされていればテキストボックスにフォーカス
            if (activeItemIdx === 0) {
              inputEref.current?.focus()
              return
            }
            // それ以外の場合は前のオプションにフォーカス
            const previousElement = optionElements[
              activeItemIdx - 1
            ] as HTMLElement
            previousElement && highlightOption(previousElement)
          })
          .with('ArrowDown', () => {
            // 次のメニューオプションにフォーカス
            // 最後のメニューオプションがフォーカスされている場合は何も起こらない
            const nextElement = optionElements[activeItemIdx + 1] as HTMLElement
            nextElement && highlightOption(nextElement)
          })
          .with('Enter', ' ', () => {
            const item = visibleItems[activeItemIdx]
            inputEref.current?.focus()
            runSelectiveProcess(item)
          })
          .with('Escape', () => {
            setIsOpen(false)
            inputEref.current?.focus()
          })
          .with('Tab', () => {
            setIsOpen(false)
          })
          .otherwise(() => {
            // ユーザが入力を続けられるよう、テキストボックスにfocus
            inputEref.current?.focus()
          })
      }
    }

    /* -------------------------------------------- */

    return (
      <Root ref={thisComponentEref}>
        {/* id={name}であるテキストボックスと関連づけ（SRで読み上げ） */}
        <label htmlFor={name}>
          <VisuallyHidden>{name}</VisuallyHidden>
        </label>
        {/* 値をサーバに送るためのname属性 */}
        <VisuallyHidden
          as='select'
          name={name}
          aria-hidden='true'
          tabIndex={-1}
          ref={ref}
          value={selectedItem?.value}
        >
          {choices.map(item => (
            <option value={item.value} key={`${name}_choice__${item.value}`}>
              {item.label ?? item.value}
            </option>
          ))}
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
            aria-expanded={isOpen}
            placeholder={placeholder}
            onKeyUp={onTextBoxKeyup}
            onKeyDown={unfocusByTab}
            onMouseDown={openByClick}
            onTouchEnd={openByClick}
            onChange={onTyping}
            ref={inputEref}
            value={typedText}
          />
          <IconOnly.Button
            icon={<VscChevronDown />}
            label={isOpen ? 'close' : 'open'}
            onMouseDown={toggleOpenByClick}
            onTouchEnd={toggleOpenByClick}
            data-open={isOpen}
          />
          {isOpen && (
            <>
              <SelectList
                id={`autocomplete-options--${name}`}
                role='listbox'
                onKeyDown={onMenuKeyDown}
                ref={listEref}
                onClick={onSelectInList}
                onMouseDown={onSelectInList}
                onFocus={onFocusInList}
              >
                {visibleItems.map((item, idx) => (
                  <li
                    data-idx={idx}
                    key={`${name}_choice${idx + 1}`}
                    role='option'
                    tabIndex={-1}
                    aria-selected={idx === activeItemIdx}
                    id={`autocomplete_${item.value}`}
                  >
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
)
