import { ValueOf } from '../types/ValueOf'
import {
  DeleteAction,
  UpdateAction,
  InsertAction,
  DragSortAction,
  MoveDownAction,
  MoveUpAction,
} from './actions'
import { BlockType } from './config'
import { FormatArgs } from '../types/FormatArgs'

// prettier-ignore
export interface RewindActionMap {
  INSERT: (id: string) => DeleteAction
  UPDATE: (id: string, diff: ValueOf<FormatArgs>) => UpdateAction
  DELETE: (type: BlockType, id: string) => InsertAction
  DRAG_SORT: (old_pos: number, new_pos: number) => DragSortAction
  MOVE_UP: (old_pos: number) => MoveDownAction
  MOVE_DOWN: (old_pos: number) => MoveUpAction
}

const rewindInsertAction: RewindActionMap['INSERT'] = id => ({
  type: 'DELETE',
  args: { id },
})

const rewindUpdateAction: RewindActionMap['UPDATE'] = (id, diff) => ({
  type: 'UPDATE',
  args: { id, diff },
})

const rewindDeleteAction: RewindActionMap['DELETE'] = (type, id) => ({
  type: 'INSERT',
  args: { id, type },
})

const rewindDragSortAction: RewindActionMap['DRAG_SORT'] = (
  old_pos,
  new_pos
) => ({
  type: 'DRAG_SORT',
  args: { old_pos: new_pos, new_pos: old_pos },
})

const rewindMoveUpAction: RewindActionMap['MOVE_UP'] = old_pos => ({
  type: 'MOVE_DOWN',
  args: { old_pos: old_pos - 1 },
})

const rewindMoveDownAction: RewindActionMap['MOVE_DOWN'] = old_pos => ({
  type: 'MOVE_UP',
  args: { old_pos: old_pos + 1 },
})

export const getRewindAction: RewindActionMap = {
  INSERT: rewindInsertAction,
  UPDATE: rewindUpdateAction,
  DELETE: rewindDeleteAction,
  DRAG_SORT: rewindDragSortAction,
  MOVE_UP: rewindMoveUpAction,
  MOVE_DOWN: rewindMoveDownAction,
}
