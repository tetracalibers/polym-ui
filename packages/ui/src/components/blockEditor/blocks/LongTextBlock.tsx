import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { ChangeEvent, useContext } from 'react'
import { BlockType } from '../module/config'
import { BlockEditorContext } from '..'
import { editInputStyle } from '../styled/editInput'
import styled from 'styled-components'
import { GroupPanel } from './GroupPanel'
import { useTextareaStretch } from '@polym/hooks'

export type LongTextBlockProps = {
  type: BlockType
  id: string
}

export const StretchTextArea = styled.textarea`
  ${editInputStyle}
  width: 100%;
  line-height: 24px;
  resize: none;
  overflow: auto;
  height: auto;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem;
  box-shadow: none;
`

export const LongTextBlock = ({ type, id }: LongTextBlockProps) => {
  const { dispatch } = useContext(BlockEditorContext)

  const updateFn = (e: ChangeEvent<HTMLTextAreaElement>) =>
    dispatch({
      type: 'UPDATE',
      args: { id, diff: { input: e.target.value } },
    })

  const [rows, updateState] = useTextareaStretch({
    onChange: updateFn,
  })

  return (
    <GroupPanel>
      <VisuallyHidden>
        <label htmlFor={id}>{type}</label>
      </VisuallyHidden>
      <StretchTextArea onChange={updateState} rows={rows} id={id} />
    </GroupPanel>
  )
}
