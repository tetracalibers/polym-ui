import _ from 'lodash'
import { nanoid } from 'nanoid'
import { match } from 'ts-pattern'
import { blockConf, BlockType, BoxType } from './config'
import { FormatArgs } from './FormatArgs'
import { arrayMoveImmutable } from 'array-move'
import { ReactNode } from 'react'
import { ValueOf } from './ValueOf'

export type Store<T extends BlockType> = {
  formatArg: FormatArgs[T]
  type: T
  id: string
  allowBox: BoxType
  currBox: 'inline' | 'block'
  icon: ReactNode
  format: (args: FormatArgs[T]) => ReactNode
}

export type StoreMap = {
  [t in BlockType]: Store<t>
}

export type StoreArr = ValueOf<StoreMap>[]

export type InsertAction = {
  type: 'INSERT'
  args: {
    type: BlockType
  }
}

export type DeleteAction = {
  type: 'DELETE'
  args: {
    id: string
  }
}

export type UpdateAction<T extends BlockType = BlockType> = {
  type: 'UPDATE'
  args: {
    id: string
    diff: { [arg in keyof FormatArgs[T]]?: FormatArgs[T][arg] }
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
      const { boxType: allowBox, icon } = newBlockInfo
      const initialBlock: Store<typeof type> = {
        type,
        formatArg: {},
        id: nanoid(),
        allowBox,
        currBox: allowBox === 'both' ? 'block' : allowBox,
        icon,
        format: newBlockInfo.format,
      } as Store<typeof type>
      return [...state, initialBlock] as StoreArr
    })
    .with('UPDATE', () => {
      const { id, diff } = (action as UpdateAction).args
      return state.map(s =>
        s.id === id ? { ...s, formatArg: { ...s.formatArg, ...diff } } : s
      )
    })
    .with('DELETE', () => {
      const { id } = (action as DeleteAction).args
      return _.reject(state, { id })
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
