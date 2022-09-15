import _ from 'lodash'
import { nanoid } from 'nanoid'
import { match } from 'ts-pattern'
import { blockConf, BlockType } from './config'
import { FormatArgs } from './FormatArgs'
import { arrayMoveImmutable } from 'array-move'
import { ReactNode } from 'react'
import { ValueOf } from './ValueOf'

export type Store<T extends BlockType> = {
  formatArg: FormatArgs[T]
  type: T
  key: string
  allowBox: 'inline' | 'block' | 'both'
  currBox: 'inline' | 'block'
  format: (args: FormatArgs[T]) => ReactNode
}

export type StoreArr = ValueOf<{
  [t in BlockType]: Store<t>
}>[]

export type InsertAction = {
  type: 'INSERT'
  args: {
    type: BlockType
  }
}

export type DeleteAction = {
  type: 'DELETE'
  args: {
    key: string
  }
}

export type UpdateAction<T extends BlockType = BlockType> = {
  type: 'UPDATE'
  args: {
    key: string
    diff: { [arg in keyof FormatArgs[T]]?: string }
  }
}

export type DragSortAction = {
  type: 'DRAG_SORT'
  args: {
    old_pos: number
    new_pos: number
  }
}

export type MoveUpAction = {
  type: 'MOVE_UP'
  args: {
    old_pos: number
  }
}

export type MoveDownAction = {
  type: 'MOVE_DOWN'
  args: {
    old_pos: number
  }
}

export type Action =
  | InsertAction
  | DeleteAction
  | UpdateAction
  | DragSortAction
  | MoveUpAction
  | MoveDownAction

export const reducer = (state: StoreArr, action: Action): StoreArr => {
  return match(action.type)
    .with('INSERT', () => {
      const { type } = (action as InsertAction).args
      const newBlockInfo = _.find(blockConf, { type })
      if (newBlockInfo === undefined) {
        return state
      }
      const allowBox = newBlockInfo.boxType
      const initialBlock: Store<typeof type> = {
        ...action.args,
        formatArg: {},
        key: nanoid(),
        allowBox,
        currBox: allowBox === 'both' ? 'block' : allowBox,
        format: newBlockInfo.format,
      } as Store<typeof type>
      return [...state, initialBlock] as StoreArr
    })
    .with('UPDATE', () => {
      const { key, diff } = (action as UpdateAction).args
      return state.map(s =>
        s.key === key ? { ...s, formatArg: { ...s.formatArg, ...diff } } : s
      )
    })
    .with('DELETE', () => {
      const { key } = (action as DeleteAction).args
      return _.reject(state, { key })
    })
    .with('DRAG_SORT', () => {
      const { old_pos, new_pos } = (action as DragSortAction).args
      const sorted = arrayMoveImmutable(state, old_pos, new_pos)
      return sorted
    })
    .with('MOVE_UP', () => {
      const { old_pos } = (action as MoveUpAction).args
      return arrayMoveImmutable(state, old_pos, old_pos - 1)
    })
    .with('MOVE_DOWN', () => {
      const { old_pos } = (action as MoveDownAction).args
      return arrayMoveImmutable(state, old_pos, old_pos + 1)
    })
    .exhaustive() as StoreArr
}
