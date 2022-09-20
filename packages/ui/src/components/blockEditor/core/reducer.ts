import _ from 'lodash'
import { nanoid } from 'nanoid'
import { match } from 'ts-pattern'
import { Block, blockConf } from './config'
import { arrayMoveImmutable } from 'array-move'
import { BlockState } from './store'
import { cutLast, makeInitialBlock, pushNew } from './util'
import {
  Action,
  InsertAction,
  UpdateAction,
  DeleteAction,
  DragSortAction,
  MoveUpAction,
  MoveDownAction,
} from './actions'
import { getRewindAction, RewindActionMap } from './rewind.actions'

type HistoryAction = ReturnType<typeof getRewindAction[keyof RewindActionMap]>

export type EditorState = {
  blocks: BlockState[]
  undoActions: HistoryAction[]
  redoActions: HistoryAction[]
}

const updateUndo = (
  prev: HistoryAction[],
  curr: HistoryAction,
  mode: 'undo' | 'redo' | undefined
) => {
  return mode === 'undo' ? cutLast(prev) : pushNew(prev, curr)
}

const updateRedo = (
  prev: HistoryAction[],
  curr: HistoryAction,
  mode: 'undo' | 'redo' | undefined
) => {
  return mode === 'redo'
    ? cutLast(prev)
    : mode === 'undo'
    ? pushNew(prev, curr)
    : prev
}

export const reducer = (state: EditorState, action: Action) => {
  const { blocks, undoActions, redoActions } = state
  return match(action.type)
    .with('INSERT', () => {
      const { type, id: _id, by } = (action as InsertAction).args
      const matchBlock = _.find(blockConf, { type }) as Block<typeof type>
      const id = _id ?? nanoid()
      const newBlock = makeInitialBlock({ id, type, matchBlock })
      const rewind = getRewindAction.INSERT(id)
      return {
        blocks: pushNew(blocks, newBlock),
        undoActions: updateUndo(undoActions, rewind, by),
        redoActions: updateRedo(redoActions, rewind, by),
      }
    })
    .with('UPDATE', () => {
      const { id, diff, by } = (action as UpdateAction).args
      const target = blocks.find(b => b.id === id)
      if (target === undefined) {
        return state
      }
      const rewind = getRewindAction.UPDATE(id, target.formatArg)
      return {
        blocks: blocks.map(b =>
          b.id === id ? { ...b, formatArg: { ...b.formatArg, ...diff } } : b
        ),
        undoActions: updateUndo(undoActions, rewind, by),
        redoActions: updateRedo(redoActions, rewind, by),
      }
    })
    .with('DELETE', () => {
      const { id, by } = (action as DeleteAction).args
      const target = blocks.find(block => block.id === id) as BlockState
      if (target === undefined) {
        return state
      }
      const rewind = getRewindAction.DELETE(target.type, id)
      return {
        blocks: _.reject(state.blocks, { id }),
        undoActions: updateUndo(undoActions, rewind, by),
        redoActions: updateRedo(redoActions, rewind, by),
      }
    })
    .with('DRAG_SORT', () => {
      const { old_pos, new_pos, by } = (action as DragSortAction).args
      const rewind = getRewindAction.DRAG_SORT(old_pos, new_pos)
      return {
        blocks: arrayMoveImmutable(state.blocks, old_pos, new_pos),
        undoActions: updateUndo(undoActions, rewind, by),
        redoActions: updateRedo(redoActions, rewind, by),
      }
    })
    .with('MOVE_UP', () => {
      const { old_pos, by } = (action as MoveUpAction).args
      const rewind = getRewindAction.MOVE_UP(old_pos)
      return {
        blocks: arrayMoveImmutable(state.blocks, old_pos, old_pos - 1),
        undoActions: updateUndo(undoActions, rewind, by),
        redoActions: updateRedo(redoActions, rewind, by),
      }
    })
    .with('MOVE_DOWN', () => {
      const { old_pos, by } = (action as MoveDownAction).args
      const rewind = getRewindAction.MOVE_DOWN(old_pos)
      return {
        blocks: arrayMoveImmutable(state.blocks, old_pos, old_pos + 1),
        undoActions: updateUndo(undoActions, rewind, by),
        redoActions: updateRedo(redoActions, rewind, by),
      }
    })
    .exhaustive()
}
