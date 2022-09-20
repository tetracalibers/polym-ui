import { match } from 'ts-pattern'
import { KeyboardBlock } from './blocks/KeyboardBlock'
import { LinkBlock } from './blocks/LinkBlock'
import { LongTextBlock } from './blocks/LongTextBlock'
import { UListBlock } from './blocks/ListBlock/UnOrder'
import { BlockLabel } from './button/BlockLabel'
import { BlockType } from './core/config'
import { OListBlock } from './blocks/ListBlock/Order'
import { FormatArgs } from './core/FormatArgs'
import { BlockquoteBlock } from './blocks/BlockquoteBlock'
import { ToggleBlock } from './blocks/ToggleBlock'
import { ImageBlock } from './blocks/ImageBlock'
import { HeadingBlock } from './blocks/HeadingBlock'
import { CodeBlock } from './blocks/CodeBlock'
import { BlockStateMap } from './core/store'

export type EditorBlockProps<T extends BlockType> = {
  pos: number
  maxPos: number
  block: BlockStateMap[T]
}

export const EditorBlock = <T extends BlockType>({
  pos,
  maxPos,
  block,
}: EditorBlockProps<T>) => {
  const { type, id, formatArg } = block
  const Block = match(type as BlockType)
    .with('link', () => (
      <LinkBlock id={id} value={formatArg as FormatArgs['link']} />
    ))
    .with('keyboard', () => (
      <KeyboardBlock
        id={id}
        keyNames={(formatArg as FormatArgs['keyboard']).items ?? []}
      />
    ))
    .with('ulist', () => <UListBlock id={id} />)
    .with('olist', () => (
      <OListBlock id={id} start={(formatArg as FormatArgs['olist']).order} />
    ))
    .with('blockquote', () => <BlockquoteBlock id={id} />)
    .with('toggle', () => <ToggleBlock id={id} />)
    .with('image', () => (
      <ImageBlock id={id} value={formatArg as FormatArgs['image']} />
    ))
    .with('heading', () => (
      <HeadingBlock
        id={id}
        level={(formatArg as FormatArgs['heading']).level ?? 2}
      />
    ))
    .with('code', () => (
      <CodeBlock
        id={id}
        lang={(formatArg as FormatArgs['code']).lang ?? 'js'}
      />
    ))
    .with('separator', () => <></>)
    .otherwise(() => <LongTextBlock type={type} id={id} />)

  return (
    <>
      <BlockLabel pos={pos} maxPos={maxPos} block={block} />
      {Block}
    </>
  )
}
