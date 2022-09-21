import {
  ComponentPropsWithoutRef,
  RefObject,
  SyntheticEvent,
  useState,
  KeyboardEvent,
  ComponentPropsWithRef,
  FormEvent,
} from 'react'
import { ChoiceItem } from '../../../DropdownSelect/model/props'
import { useInput, useNanoId, useUnFocus } from '@polym/hooks'
import _ from 'lodash'
import { match } from 'ts-pattern'
import { useScrollToViewFocus } from '../../hooks/useScrollToViewFocus'

export type UseComboboxArgs = {
  choices: ChoiceItem[]
  rootRef: RefObject<HTMLDivElement>
  listRef: RefObject<HTMLUListElement>
  inputRef: RefObject<HTMLInputElement>
  initialSelected?: ChoiceItem
  onSelect?: (item: ChoiceItem) => void
}

export const useCombobox = ({
  choices,
  rootRef,
  listRef,
  inputRef,
  initialSelected,
  onSelect,
}: UseComboboxArgs) => {
  /* -------------------------------------------- */
  /* STATE                                        */
  /* -------------------------------------------- */

  const [isOpen, setIsOpen] = useState(false)
  const [activeItemIdx, setActiveItemIdx] = useState(-1)
  const [visibleItems, setVisibleItems] = useState(choices as ChoiceItem[])
  const [selectedItem, setSelectedItem] = useState(initialSelected)

  /* -------------------------------------------- */
  /* ID                                           */
  /* -------------------------------------------- */

  const selectListId = useNanoId()
  const autoCompleteInputId = useNanoId()

  /* -------------------------------------------- */
  /* UTILITY                                      */
  /* -------------------------------------------- */

  const scrollFocus = useScrollToViewFocus()

  // フィルタリング
  const filtering = (inputStr: string) => {
    return choices.filter(choice => {
      return `${choice.label}`
        .trim()
        .toLowerCase()
        .includes(inputStr.trim().toLowerCase())
    })
  }

  // 入力値が空か
  const isEmptyValue = (value: ChoiceItem['value']) => {
    return `${value}`.trim().length === 0
  }

  // 入力値が選択肢の一つと完全に一致するか
  const isExactMatch = (value: ChoiceItem['value']) => {
    return !!_.find(choices, (choice: ChoiceItem) => choice.value === value)
  }

  // 入力値によるフィルタリング
  const filteringByInputValue = (value: string) => {
    const filterd = filtering(value)
    setVisibleItems(filterd)
    setIsOpen(true)
  }

  // 選択処理
  const select = (item: ChoiceItem) => {
    // フィルタリング処理を含むonInputは実行しないため、falseを設定
    onTyping(item.label!, false)
    setSelectedItem(item)
    setIsOpen(false)
    // propsで指定された処理を実行
    onSelect && onSelect(item)
  }

  // input内で下矢印キーを押すとメニューが開く
  const openMenuByArrowDown = () => {
    if (inputRef.current) {
      const inputValue = inputRef.current.value.trim()
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
      const firstOptionE = listRef.current?.childNodes[0] as HTMLElement
      firstOptionE && scrollFocus(firstOptionE)
    }
  }

  /* -------------------------------------------- */
  /* HANDLER                                      */
  /* -------------------------------------------- */

  // unfocus時に非表示
  const onUnfocusByTabKey = useUnFocus(() => setIsOpen(false), rootRef)

  // タイピング管理
  const [typedText, onTyping] = useInput(
    initialSelected?.label,
    filteringByInputValue
  )

  // クリックした時にドロップダウンを開く
  const onClickToOpen = (e: SyntheticEvent) => {
    setIsOpen(true)
    e.stopPropagation()
  }

  // クリックした時にドロップダウンを開閉
  const onClickToToggleOpen = (e: SyntheticEvent) => {
    setIsOpen(flag => !flag)
    e.stopPropagation()
  }

  // クリックしたものを選択
  const onClickToSelect = (e: FormEvent<HTMLUListElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.target === listRef.current) return
    const list = e.target as Element
    const idx = list.attributes.getNamedItem('data-idx')?.value
    if (idx !== undefined) {
      const item = visibleItems[+idx]
      select(item)
    }
  }

  // focusされたらハイライト
  const onFocusToHighlight = (e: FormEvent<HTMLUListElement>) => {
    e.stopPropagation()
    if (e.target === listRef.current) return
    const list = e.target as Element
    const idx = list.attributes.getNamedItem('data-idx')?.value
    if (!_.isUndefined(idx)) {
      setActiveItemIdx(+idx)
    }
  }

  // キーボードによるinput操作
  const onKeyboardInputOperation = (e: KeyboardEvent<HTMLInputElement>) => {
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
      .with('ArrowDown', () => openMenuByArrowDown())
      .otherwise(() => {})
  }

  // キーボードによるメニュー操作
  const onKeyboardMenuOperation = (e: KeyboardEvent<HTMLUListElement>) => {
    if (listRef.current) {
      const listItems = listRef.current?.childNodes
      match(e.key)
        .with('ArrowUp', () => {
          // 最初のオプションがフォーカスされていればテキストボックスにフォーカス
          if (activeItemIdx === 0) {
            inputRef.current?.focus()
            return
          }
          // それ以外の場合は前のオプションにフォーカス
          const previousElement = listItems[activeItemIdx - 1] as HTMLElement
          previousElement && scrollFocus(previousElement)
        })
        .with('ArrowDown', () => {
          // 次のメニューオプションにフォーカス
          // 最後のメニューオプションがフォーカスされている場合は何も起こらない
          const nextElement = listItems[activeItemIdx + 1] as HTMLElement
          nextElement && scrollFocus(nextElement)
        })
        .with('Enter', ' ', () => {
          const item = visibleItems[activeItemIdx]
          inputRef.current?.focus()
          select(item)
        })
        .with('Escape', () => {
          setIsOpen(false)
          inputRef.current?.focus()
        })
        .with('Tab', () => {
          setIsOpen(false)
        })
        .otherwise(() => {
          // ユーザが入力を続けられるよう、テキストボックスにfocus
          inputRef.current?.focus()
        })
    }
  }

  /* -------------------------------------------- */
  /* ATTRS                                        */
  /* -------------------------------------------- */

  const rootAttrs = {
    ref: rootRef,
  }

  const autoCompleteInputAttrs: ComponentPropsWithRef<'input'> = {
    /* WAI-ARIA ----------------------------------- */
    'aria-owns': selectListId,
    'aria-autocomplete': 'list',
    'aria-expanded': isOpen,
    role: 'combobox',
    /* UX ----------------------------------------- */
    autoCapitalize: 'none',
    autoComplete: 'off',
    /* REACT -------------------------------------- */
    ref: inputRef,
    /* HTML --------------------------------------- */
    type: 'text',
    id: autoCompleteInputId,
    value: typedText,
    /* HANDLER ------------------------------------ */
    onKeyUp: onKeyboardInputOperation,
    onKeyDown: onUnfocusByTabKey,
    onMouseDown: onClickToOpen,
    onTouchEnd: onClickToOpen,
    onChange: onTyping,
  }

  const selectListAttrs: ComponentPropsWithRef<'ul'> = {
    /* WAI-ARIA ----------------------------------- */
    role: 'listbox',
    /* REACT -------------------------------------- */
    ref: listRef,
    /* HTML --------------------------------------- */
    id: selectListId,
    /* HANDLER ------------------------------------ */
    onClick: onClickToSelect,
    onMouseDown: onClickToSelect,
    onFocus: onFocusToHighlight,
    onKeyDown: onKeyboardMenuOperation,
  }

  const getSelectListItemAttrs = (
    idx: number
  ): ComponentPropsWithoutRef<'li'> & {
    'data-idx': number
  } => ({
    /* WAI-ARIA ----------------------------------- */
    role: 'option',
    'aria-selected': idx === activeItemIdx,
    /* HTML --------------------------------------- */
    tabIndex: -1,
    id: `${selectListId}_item${idx}`,
    'data-idx': idx,
  })

  const arrowIconButtonAttrs: ComponentPropsWithoutRef<'button'> = {
    onMouseDown: onClickToToggleOpen,
    onTouchEnd: onClickToToggleOpen,
  }

  /* -------------------------------------------- */
  /* PUBLIC                                       */
  /* -------------------------------------------- */

  return {
    isOpen,
    selectedItem,
    visibleItems,
    attr: {
      root: rootAttrs,
      input: autoCompleteInputAttrs,
      list: selectListAttrs,
      listItem: getSelectListItemAttrs,
      arrowIcon: arrowIconButtonAttrs,
    },
    inputId: autoCompleteInputId,
  }
}
