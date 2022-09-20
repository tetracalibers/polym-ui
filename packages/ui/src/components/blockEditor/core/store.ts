import { ReactNode } from 'react'
import { ValueOf } from '../types/ValueOf'
import { BlockType, BoxType } from './config'
import { FormatArgs } from './FormatArgs'

export type BlockState<T extends BlockType = BlockType> = {
  formatArg: FormatArgs[T]
  type: T
  id: string
  allowBox: BoxType
  currBox: 'inline' | 'block'
  icon: ReactNode
  format: (args: FormatArgs[T]) => ReactNode
}

export type BlockStateMap = {
  [t in BlockType]: BlockState<t>
}

export type BlockStateArr = ValueOf<BlockStateMap>[]
