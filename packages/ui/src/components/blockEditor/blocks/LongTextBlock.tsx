import { useTextareaStretch } from '@polym/hooks'
import { StretchTextArea } from '../styled/longTextBlock'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { ChangeEvent, useContext } from 'react'
import { BlockType } from '../module/config'
import { BlockEditorContext } from '..'

export type LongTextBlockProps = {
  type: BlockType
  id: string
}

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
    <>
      <VisuallyHidden>
        <label htmlFor={id}>{type}</label>
      </VisuallyHidden>
      <StretchTextArea onChange={updateState} rows={rows} id={id} />
    </>
  )
}
