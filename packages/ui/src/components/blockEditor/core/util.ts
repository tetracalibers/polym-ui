import { Block, BlockType } from './config'
import { BlockState } from './store'

type MakeInitialBlockArgs<T extends BlockType> = {
  id: string
  type: T
  matchBlock: Block<T>
}

export const makeInitialBlock = <T extends BlockType>({
  id,
  type,
  matchBlock,
}: MakeInitialBlockArgs<T>): BlockState<T> => {
  const { boxType: allowBox, icon, format } = matchBlock
  return {
    type,
    formatArg: {},
    id,
    allowBox,
    currBox: allowBox === 'both' ? 'inline' : allowBox,
    icon,
    format,
  } as BlockState<T>
}
