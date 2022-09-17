import { match } from 'ts-pattern'
import { KeyboardBlock } from './blocks/KeyboardBlock'
import { LinkBlock } from './blocks/LinkBlock'
import { LongTextBlock } from './blocks/LongTextBlock'
import { UListBlock } from './blocks/ListBlock/UnOrder'
import { BlockLabel } from './button/BlockLabel'
import { BlockType } from './module/config'
import { StoreMap } from './module/reducer'
import { OListBlock } from './blocks/ListBlock/Order'
import { FormatArgs } from './module/FormatArgs'

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
  const { type, id, formatArg } = block
  const Block = match(type as BlockType)
    .with('link', () => <LinkBlock id={id} />)
    .with('keyboard', () => <KeyboardBlock id={id} />)
    .with('ulist', () => <UListBlock id={id} />)
    .with('olist', () => <OListBlock id={id} start={(formatArg as FormatArgs['olist']).order} />)
    .with('separator', () => <></>)
    .otherwise(() => <LongTextBlock type={type} id={id} />)

  return (
    <>
      <BlockLabel pos={pos} maxPos={maxPos} block={block} />
      {Block}
    </>
  )
}
