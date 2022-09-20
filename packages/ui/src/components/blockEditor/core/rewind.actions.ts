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
import { FormatArgs } from './FormatArgs'

// prettier-ignore
export interface RewindActionMap {
  INSERT: (id: string) => [DeleteAction]
  UPDATE: (id: string, diff: ValueOf<FormatArgs>) => [UpdateAction]
  DELETE: (type: BlockType, id: string, diff: ValueOf<FormatArgs>) => [InsertAction, UpdateAction]
  DRAG_SORT: (old_pos: number, new_pos: number) => [DragSortAction]
  MOVE_UP: (old_pos: number) => [MoveDownAction]
  MOVE_DOWN: (old_pos: number) => [MoveUpAction]
}

const rewindInsertActions: RewindActionMap['INSERT'] = id => [
  { type: 'DELETE', args: { id } },
]

const rewindUpdateActions: RewindActionMap['UPDATE'] = (id, diff) => [
  { type: 'UPDATE', args: { id, diff } },
]

const rewindDeleteActions: RewindActionMap['DELETE'] = (type, id, diff) => [
  { type: 'INSERT', args: { id, type } },
  { type: 'UPDATE', args: { id, diff } },
]

const rewindDragSortActions: RewindActionMap['DRAG_SORT'] = (
  old_pos,
  new_pos
) => [
  {
    type: 'DRAG_SORT',
    args: { old_pos: new_pos, new_pos: old_pos },
  },
]

const rewindMoveUpActions: RewindActionMap['MOVE_UP'] = old_pos => [
  { type: 'MOVE_DOWN', args: { old_pos } },
]

const rewindMoveDownActions: RewindActionMap['MOVE_DOWN'] = old_pos => [
  { type: 'MOVE_UP', args: { old_pos } },
]

export const getRewindActions: RewindActionMap = {
  INSERT: rewindInsertActions,
  UPDATE: rewindUpdateActions,
  DELETE: rewindDeleteActions,
  DRAG_SORT: rewindDragSortActions,
  MOVE_UP: rewindMoveUpActions,
  MOVE_DOWN: rewindMoveDownActions,
}
