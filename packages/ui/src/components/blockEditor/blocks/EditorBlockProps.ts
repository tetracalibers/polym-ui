import { ChangeEvent } from 'react'
import { BlockType } from '../module/block'

export type EditorBlockProps = {
  updateFn: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  type: BlockType
  id: string
}
