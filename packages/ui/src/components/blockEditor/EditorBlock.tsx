import { LongTextBlock } from './blocks/LongTextBlock'
import { BlockLabel } from './button/BlockLabel'
import { ChangeEvent } from 'react'
import { BlockType } from './module/block'

export type EditorBlockProps = {
  updateFn: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  type: BlockType
  id: string
  pos: number
  maxPos: number
}

export const EditorBlock = ({
  type,
  updateFn,
  id,
  pos,
  maxPos,
}: EditorBlockProps) => {
  return (
    <>
      <BlockLabel type={type} pos={pos} maxPos={maxPos} />
      <LongTextBlock type={type} updateFn={updateFn} id={id} />
    </>
  )
}
