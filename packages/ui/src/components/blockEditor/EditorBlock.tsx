import { EditorBlockProps } from './blocks/EditorBlockProps'
import { LongTextBlock } from './blocks/LongTextBlock'
import { BlockLabel } from './button/BlockLabel'

export const EditorBlock = ({ type, updateFn, id }: EditorBlockProps) => {
  return (
    <>
      <BlockLabel type={type} />
      <LongTextBlock type={type} updateFn={updateFn} id={id} />
    </>
  )
}
