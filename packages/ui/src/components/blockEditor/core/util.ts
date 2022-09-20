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

export const pushNew = <T = any>(arr: T[], newElem: T) => arr.concat([newElem])

export const cutLast = <T = any>(arr: T[]) => arr.slice(0, arr.length - 1)

export const last = <T = any>(arr: T[]) => arr[arr.length - 1]
