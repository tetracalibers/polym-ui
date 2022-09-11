import { LongTextBlock } from './blocks/LongTextBlock'
import { BlockLabel } from './button/BlockLabel'
import { ChangeEvent } from 'react'
import { BlockType } from './module/block'

export type EditorBlockProps = {
  updateFn: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  type: BlockType
  id: string
  pos: number
}

export const EditorBlock = ({ type, updateFn, id, pos }: EditorBlockProps) => {
  return (
    <>
      <BlockLabel type={type} pos={pos} />
      <LongTextBlock type={type} updateFn={updateFn} id={id} />
    </>
  )
}
