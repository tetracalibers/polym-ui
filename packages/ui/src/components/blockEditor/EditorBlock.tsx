import { match } from 'ts-pattern'
import { LinkBlock } from './blocks/LinkBlock'
import { LongTextBlock } from './blocks/LongTextBlock'
import { BlockLabel } from './button/BlockLabel'
import { BlockType } from './module/config'
import { StoreMap } from './module/reducer'

export type EditorBlockProps<T extends BlockType> = {
  pos: number
  maxPos: number
  block: StoreMap[T]
}

export const EditorBlock = <T extends BlockType>({
  pos,
  maxPos,
  block,
}: EditorBlockProps<T>) => {
  const { type, id } = block
  const Block = match(type as BlockType)
    .with('link', () => <LinkBlock id={id} />)
    .with('separator', () => <></>)
    .otherwise(() => <LongTextBlock type={type} id={id} />)

  return (
    <>
      <BlockLabel pos={pos} maxPos={maxPos} block={block} />
      {Block}
    </>
  )
}
