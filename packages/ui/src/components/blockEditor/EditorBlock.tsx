import { match } from 'ts-pattern'
import { LinkBlock } from './blocks/LinkBlock'
import { LongTextBlock } from './blocks/LongTextBlock'
import { BlockLabel } from './button/BlockLabel'
import { BlockType } from './module/config'

export type EditorBlockProps = {
  type: BlockType
  id: string
  pos: number
  maxPos: number
}

export const EditorBlock = ({ type, id, pos, maxPos }: EditorBlockProps) => {
  const Block = match(type)
    .with('link', () => <LinkBlock id={id} />)
    .otherwise(() => <LongTextBlock type={type} id={id} />)

  return (
    <>
      <BlockLabel type={type} pos={pos} maxPos={maxPos} id={id} />
      {Block}
    </>
  )
}
