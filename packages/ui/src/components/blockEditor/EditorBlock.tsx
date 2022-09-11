import { EditorBlockProps } from './blocks/EditorBlockProps'
import { LongTextBlock } from './blocks/LongTextBlock'

export const EditorBlock = ({ key, type, updateFn }: EditorBlockProps) => {
  return <LongTextBlock key={key} type={type} updateFn={updateFn} />
}
