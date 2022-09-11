import { ChangeEvent } from 'react'
import { BlockType } from './module/block'

type EditorBlockProps = {
  updateFn: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  key: string
  type: BlockType
}

export const EditorBlock = ({ key, type, updateFn }: EditorBlockProps) => {
  return <textarea key={key} placeholder={type} onChange={updateFn}></textarea>
}
