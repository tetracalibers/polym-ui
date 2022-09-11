import { EditorBlockProps } from './blocks/EditorBlockProps'
import { LongTextBlock } from './blocks/LongTextBlock'

export const EditorBlock = ({ type, updateFn, id }: EditorBlockProps) => {
  return <LongTextBlock type={type} updateFn={updateFn} id={id} />
}
