import { LongTextBlock } from './blocks/LongTextBlock'
import { BlockLabel } from './button/BlockLabel'
import { BlockType } from './module/block'

export type EditorBlockProps = {
  type: BlockType
  id: string
  pos: number
  maxPos: number
}

export const EditorBlock = ({ type, id, pos, maxPos }: EditorBlockProps) => {
  return (
    <>
      <BlockLabel type={type} pos={pos} maxPos={maxPos} />
      <LongTextBlock type={type} id={id} />
    </>
  )
}
