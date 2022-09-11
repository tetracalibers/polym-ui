import { useTextareaStretch } from '@polym/hooks'
import { StretchTextArea } from '../styled/longTextBlock'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'
import { ChangeEvent } from 'react'
import { BlockType } from '../module/block'

export type LongTextBlockProps = {
  updateFn: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  type: BlockType
  id: string
}

export const LongTextBlock = ({ updateFn, type, id }: LongTextBlockProps) => {
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
