import _ from 'lodash'
import { useRef } from 'react'
import { useCombobox } from './useCombobox'
import { VscChevronDown } from 'react-icons/vsc'
import styled, { css } from 'styled-components'
import { ResetCss } from 'styled-utility-first'
import { VisuallyHidden } from '../../../a11y-helper/VisuallyHidden'
import { IconOnly } from '../../../core/IconOnly'
import { ChoiceItem } from '../../../DropdownSelect/model/props'
import { Root } from '../../../DropdownSelect/styled'
import { editInputStyle } from '../../styled/editInput'

const variables = css`
  --icon-size: 2rem;
  --icon-color: #0396ff;
  --gap: 1rem;
  --bg-color: #f7f9ff;
  --shadow-color: #b1b2ff;
  --float-color: #8c1bab;
`

export const FloatLabelManager = styled.div``

export const Input = styled.input`
  ${editInputStyle}
  margin: 0;
  padding: 1.8rem 1rem 0.6rem;
  font-size: 1rem;

  /* 表示状態を検知するために透明にして残しておく */
  &::placeholder {
    color: rgba(255, 255, 255, 0);
  }
`

const Label = styled.label`
  display: block;
  position: relative;
  max-height: 0;
  pointer-events: none;
  width: 100%;

  &::before {
    color: var(--color);
    content: attr(data-label);
    display: inline-block;
    filter: blur(0);
    backface-visibility: hidden;
    transform-origin: left top;
    transition: transform 0.2s ease;
    position: relative;
    left: calc(-1.5 * var(--gap));
  }

  ${Input}:placeholder-shown + &::before {
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
  }

  &::before,
  ${Input}:focus + &::before {
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
  }

  /* focus時と入力済みの場合 */
  ${Input}:focus + &::before,
  ${Input}:not(:placeholder-shown) + &::before {
    color: var(--float-color);
  }
`

export const AutoComplete = styled.div`
  ${variables}

  display: flex;
  position: relative;

  & button {
    ${ResetCss.button}
    position: absolute;
    right: 2.5%;
    top: 50%;
    transform: translateY(-50%);
  }

  & button svg {
    width: var(--icon-size);
    height: var(--icon-size);
    fill: var(--icon-color);
    stroke: var(--icon-color);
    transform: rotate(0deg);
    transition: transform 0.5s ease;
  }

  & button[data-open='true'] svg {
    transform: rotate(180deg);
  }
`

export const SelectList = styled.ul`
  /* メニューをスクロール可能にする */
  max-height: 12em;
  overflow-y: auto;
  /* iOSで慣性スクロールができるようにする */
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background-color: #cdf0ea;
    border-radius: 6px;
    box-shadow: rgb(0 0 0 / 6%) 0px 2px 4px 0px inset;
    box-shadow: rgb(171 216 255) -3px -3px 6px 0px inset,
      rgb(255 255 255 / 50%) 3px 3px 6px 1px inset;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ecc5fb;
    border-radius: 6px;
    border: 1px solid transparent;
    background-clip: content-box;
  }

  /* scroll hint */
  background: linear-gradient(var(--bg-color) 33%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), var(--bg-color) 66%) 0 100%,
    radial-gradient(
      farthest-side at 50% 0,
      var(--shadow-color),
      rgba(255, 255, 255, 0)
    ),
    radial-gradient(
        farthest-side at 50% 100%,
        var(--shadow-color),
        rgba(255, 255, 255, 0)
      )
      0 100%;
  background-color: var(--bg-color);
  background-repeat: no-repeat;
  background-attachment: local, local, scroll, scroll;
  background-size: 100% 33px, 100% 33px, 100% 11px, 100% 11px;

  /* design */
  position: absolute;
  width: 100%;
  top: 110%;
  list-style: none;
  box-shadow: rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;
  border-radius: 10px;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  && > li[role='option'] {
    display: block;
    padding: var(--gap) 0;
    border: none;
  }

  && > li[role='option']:hover,
  && > li[role='option']:focus {
    background-image: linear-gradient(to right, #fdeb71 10%, #f8d800 100%);
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
`

export type ComboBoxProps = {
  choices: ChoiceItem[]
  label: string
  onSelect?: (selected: ChoiceItem) => void
  initialSelected?: ChoiceItem
}

export const ComboBox = ({
  choices,
  label,
  onSelect,
  initialSelected,
}: ComboBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const { isOpen, selectedItem, attr, inputId, visibleItems } = useCombobox({
    choices,
    inputRef,
    rootRef,
    listRef,
    initialSelected,
    onSelect,
  })

  const name = _.snakeCase(label)
  const getItemKey = (value: string | number) =>
    `${name}__${_.snakeCase(value.toString())}`

  return (
    <Root {...attr.root}>
      {/* 値をサーバに送るためのname属性 */}
      <VisuallyHidden as='select' aria-hidden='true' name={name} tabIndex={-1}>
        {choices.map(item => (
          <option value={item.value} key={getItemKey(item.value)}>
            {item.label ?? item.value}
          </option>
        ))}
      </VisuallyHidden>
      <AutoComplete>
        <FloatLabelManager>
          {/* このinputBoxの値はサーバには送らないため、name属性は不要 */}
          <Input {...attr.input} placeholder={label} />
          {/* テキストボックスと関連づけ（SRで読み上げ） */}
          <Label htmlFor={inputId} data-label={label}>
            <VisuallyHidden>{label}</VisuallyHidden>
          </Label>
        </FloatLabelManager>
        <IconOnly.Button
          icon={<VscChevronDown />}
          label={isOpen ? 'close' : 'open'}
          data-open={isOpen}
          {...attr.arrowIcon}
        />
        {isOpen && (
          <>
            <SelectList {...attr.list}>
              {visibleItems.map((item, idx) => (
                <li {...attr.listItem(idx)} key={getItemKey(item.value)}>
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
