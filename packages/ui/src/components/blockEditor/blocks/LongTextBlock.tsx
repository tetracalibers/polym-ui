import { EditorBlockProps } from './EditorBlockProps'
import { useTextareaStretch } from '@polym/hooks'
import { StretchTextArea } from '../styled/longTextBlock'

export type LongTextBlockProps = EditorBlockProps

export const LongTextBlock = ({ updateFn, type, id }: LongTextBlockProps) => {
  const [rows, updateState] = useTextareaStretch({
    onChange: updateFn,
  })

  return (
    <>
      <label htmlFor={id}>{type}</label>
      <StretchTextArea onChange={updateState} rows={rows} id={id} />
    </>
  )
}
