import { BlockType } from './config'
import { FormatArgs } from './FormatArgs'

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
