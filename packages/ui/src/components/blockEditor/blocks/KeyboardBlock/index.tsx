import styled from 'styled-components'
import { IconOnly } from '../../../core/IconOnly'
import { ResetCss } from 'styled-utility-first'
import { BsPlusSquareDotted } from 'react-icons/bs'
import { editInputStyle } from '../../styled/editInput'
import { GroupPanel } from '../GroupPanel'
import { useReducer, ChangeEvent, useContext, useEffect } from 'react'
import * as Local from './reducer'
import * as Global from '../../module/reducer'
import { BlockEditorContext } from '../..'
import _ from 'lodash'

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
}

export const KeyboardBlock = ({ id }: KeyBoardBlockProps) => {
  const [keyNames, localDispatch] = useReducer(Local.reducer, [])
  const { dispatch: globalDispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLInputElement>, pos: number) => {
    const localAction: Local.UpdateAction = {
      type: 'UPDATE',
      args: {
        pos,
        keyName: e.target.value,
      },
    }
    localDispatch(localAction)
  }

  useEffect(() => {
    const globalAction: Global.UpdateAction<'keyboard'> = {
      type: 'UPDATE',
      args: {
        id,
        diff: {
          keyNames,
        },
      },
    }
    globalDispatch(globalAction)
  }, [keyNames])

  const addFn = () => {
    const localAction: Local.AddAction = {
      type: 'ADD',
      args: {},
    }
    localDispatch(localAction)
  }

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
