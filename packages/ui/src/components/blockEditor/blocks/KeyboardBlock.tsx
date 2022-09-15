import styled from 'styled-components'
import { IconOnly } from '../../core/IconOnly'
import { ResetCss } from 'styled-utility-first'
import { BsPlusSquareDotted } from 'react-icons/bs'
import { editInputStyle } from '../styled/editInput'
import { GroupPanel } from './GroupPanel'
import { useState } from 'react'

const Panel = styled(GroupPanel)`
  display: flex;
  gap: 1em;
  align-items: center;
`

const AddButton = styled(IconOnly.Button)`
  ${ResetCss.button}
  color: rgb(96, 125, 139);

  & svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const InlineInput = styled.input`
  ${editInputStyle}
  padding: 0.5em;

  /* 文字数に合わせて伸縮 */
  min-width: 2em;
  text-align: center;
  box-sizing: content-box;
  width: ${({ value }) => (value as string)?.length ?? 2}ch;
`

export const KeyboardBlock = () => {
  const [inputV, setInputV] = useState('')

  return (
    <Panel>
      <InlineInput value={inputV} onChange={e => setInputV(e.target.value)} />
      <AddButton icon={<BsPlusSquareDotted />} label='add keyboard name' />
    </Panel>
  )
}
