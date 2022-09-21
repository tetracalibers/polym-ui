import { BlockType } from './config'
import { FormatArgs } from '../types/FormatArgs'

export type InsertAction = {
  type: 'INSERT'
  args: {
    type: BlockType
    id?: string
    by?: 'redo' | 'undo'
  }
}

export type DeleteAction = {
  type: 'DELETE'
  args: {
    id: string
    by?: 'redo' | 'undo'
  }
}

export type UpdateAction<T extends BlockType = BlockType> = {
  type: 'UPDATE'
  args: {
    id: string
    diff: { [arg in keyof FormatArgs[T]]?: FormatArgs[T][arg] }
    by?: 'redo' | 'undo'
  }
}

export type DragSortAction = {
  type: 'DRAG_SORT'
  args: {
    old_pos: number
    new_pos: number
    by?: 'redo' | 'undo'
  }
}

export type MoveUpAction = {
  type: 'MOVE_UP'
  args: {
    old_pos: number
    by?: 'redo' | 'undo'
  }
}

export type MoveDownAction = {
  type: 'MOVE_DOWN'
  args: {
    old_pos: number
    by?: 'redo' | 'undo'
  }
}

export type Action =
  | InsertAction
  | DeleteAction
  | UpdateAction
  | DragSortAction
  | MoveUpAction
  | MoveDownAction
