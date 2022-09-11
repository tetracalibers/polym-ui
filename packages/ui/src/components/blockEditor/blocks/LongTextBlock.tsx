import { EditorBlockProps } from './EditorBlockProps'
import { useTextareaStretch } from '@polym/hooks'
import { StretchTextArea } from '../styled/longTextBlock'
import { VisuallyHidden } from '../../a11y-helper/VisuallyHidden'

export type LongTextBlockProps = EditorBlockProps

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
