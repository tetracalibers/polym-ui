import _ from 'lodash'
import {
  FormEvent,
  forwardRef,
  KeyboardEvent,
  ReactElement,
  SyntheticEvent,
  useCallback,
  useEffect,
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
import { isTemplateHead } from 'typescript'

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
    const [activeItemIdx, setActiveItemIdx] = useState(-1)

    const inputEref = useRef<HTMLInputElement>(null)
    const thisComponentEref = useRef<HTMLDivElement>(null)
    const listEref = useRef<HTMLUListElement>(null)

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

    /* -------------------------------------------- */
    /* FOCUS ON INPUT                               */
    /* -------------------------------------------- */

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
        // 値が空orオプションの一つと完全にマッチする場合は、メニュー全体を表示
        if (isEmptyValue(inputValue) || isExactMatch(inputValue)) {
          // TODO 値に基づいてオプション取得
          // TODO オプションをもとにメニューを構築
          // メニューを表示
          setIsOpen(true)
          // TODO メニューの最初のオプションを取得
          // TODO 最初のオプションをハイライト

          // 値が部分的にマッチする場合、マッチするオプションを表示
        } else {
          // TODO 値に基づいてオプション取得
          // TODO オプションがある場合、以下同様
        }
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
          onTextBoxType()
        })
    }

    // Tabによってフォーカスを外した時にメニュー非表示
    const unfocusByTab = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Tab') {
        setIsOpen(false)
      }
    }

    // 範囲外クリックによってフォーカスを外した時にメニュー非表示
    const unfocusByClickDocument = useCallback(
      (e: MouseEvent | TouchEvent) => {
        if (thisComponentEref.current) {
          const innerElements = thisComponentEref.current.querySelectorAll('*')
          // クリックした要素がこのコンポーネント内にあったら、非表示処理には進まない
          if (_.some(innerElements, el => el === e.target)) {
            return
          }
        }
        setIsOpen(false)
      },
      [thisComponentEref]
    )
    // documentにイベント設定
    useEffect(() => {
      document.addEventListener('click', unfocusByClickDocument, false)
      document.addEventListener('touchend', unfocusByClickDocument, false)
      return function cleanup() {
        document.removeEventListener('click', unfocusByClickDocument, false)
        document.removeEventListener('touchend', unfocusByClickDocument, false)
      }
    }, [])

    /* -------------------------------------------- */
    /* CLICK LIST                                   */
    /* -------------------------------------------- */

    // 選択時
    const onSelectInList = (e: FormEvent<HTMLUListElement>) => {
      e.stopPropagation()
      if (e.target === listEref.current) return
      const list = e.target as Element
      const idx = list.attributes.getNamedItem('data-idx')?.value
      if (idx !== undefined) {
        const item = choices[+idx]
        setSelectedItem(item)
        setIsOpen(false)
        inputEref.current?.focus()
        // propsで指定された処理を実行
        onSelect && onSelect(item)
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

    // TODO onSelectInListと同時指定すると潰されるよ…
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
            previousElement?.focus()
          })
          .with('ArrowDown', () => {
            // 次のメニューオプションにフォーカス
            // 最後のメニューオプションがフォーカスされている場合は何も起こらない
            const nextElement = optionElements[activeItemIdx + 1] as HTMLElement
            nextElement?.focus()
          })
          .with('Enter', ' ', () => {
            const item = choices[activeItemIdx]
            // 現在フォーカスが当たっているオプションが選択される
            setSelectedItem(item)
            // メニューを隠す
            setIsOpen(false)
            // テキストボックスにfocus
            inputEref.current?.focus()
            // propsで指定された処理を実行
            onSelect && onSelect(item)
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
            onMouseDown={openByClick}
            onTouchEnd={openByClick}
            ref={inputEref}
          />
          <ArrowIcon
            direction={isOpen ? 'up' : 'down'}
            onMouseDown={toggleOpenByClick}
            onTouchEnd={toggleOpenByClick}
          />
          {isOpen && (
            <SelectList
              id={`autocomplete-options--${name}`}
              role='listbox'
              onKeyDown={onMenuKeyDown}
              ref={listEref}
              //onClick={onSelectInList}
              //onMouseDown={onSelectInList}
              onFocus={onFocusInList}
            >
              {choices.map((item, idx) => (
                <li
                  data-idx={idx}
                  key={`${name}_choice${idx + 1}`}
                  role='option'
                  tabIndex={-1}
                  aria-selected={false}
                  id={`autocomplete_${item.value}`}
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
