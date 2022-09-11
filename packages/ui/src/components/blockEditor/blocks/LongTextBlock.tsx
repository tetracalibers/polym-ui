import { EditorBlockProps } from './EditorBlockProps'
import { useTextareaStretch } from '@polym/hooks'
import { StretchTextArea } from '../styled/longTextBlock'

export type LongTextBlockProps = EditorBlockProps

export const LongTextBlock = ({ updateFn, type, key }: LongTextBlockProps) => {
  const [rows, updateState] = useTextareaStretch({
    onChange: updateFn,
  })

  return (
    <div key={key}>
      <label htmlFor={key}>{type}</label>
      <StretchTextArea onChange={updateState} rows={rows} id={key} />
    </div>
  )
}
