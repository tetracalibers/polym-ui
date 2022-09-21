import styled from 'styled-components'
import { IconOnly } from '../../../core/IconOnly'
import { ResetCss } from 'styled-utility-first'
import { BsPlusSquareDotted } from 'react-icons/bs'
import { GroupPanel } from '../../dedicated/GroupPanel'
import _ from 'lodash'
import { useAddmore } from '../../reusable/AddMore/useAddmore'
import { FormatArgs } from '../../types/FormatArgs'
import { editInputStyle } from '../style'

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

type KeyBoardBlockProps = {
  id: string
  keyNames: FormatArgs['keyboard']['items']
}

export const KeyboardBlock = ({ id, keyNames = [] }: KeyBoardBlockProps) => {
  const { addFn, updateFn } = useAddmore(id)

  return (
    <Panel>
      {keyNames.map((keyName, idx) => (
        <InlineInput
          value={keyName}
          key={`${id}_${idx}`}
          onChange={e => updateFn(e, idx)}
        />
      ))}
      <AddButton
        icon={<BsPlusSquareDotted />}
        label='add keyboard name'
        onClick={addFn}
      />
    </Panel>
  )
}
