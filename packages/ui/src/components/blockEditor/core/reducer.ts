import _ from 'lodash'
import { nanoid } from 'nanoid'
import { match } from 'ts-pattern'
import { Block, blockConf } from './config'
import { arrayMoveImmutable } from 'array-move'
import { BlockState } from './store'
import { cutLast, last, makeInitialBlock, pushNew } from './util'
import {
  Action,
  InsertAction,
  UpdateAction,
  DeleteAction,
  DragSortAction,
  MoveUpAction,
  MoveDownAction,
} from './actions'
import { getRewindActions, RewindActionMap } from './rewind.actions'

export type EditorState = {
  blocks: BlockState[]
  undoActions: ReturnType<typeof getRewindActions[keyof RewindActionMap]>[]
  redoActions: ReturnType<typeof getRewindActions[keyof RewindActionMap]>[]
}

export const reducer = (state: EditorState, action: Action) => {
  const { blocks, undoActions, redoActions } = state
  return match(action.type)
    .with('INSERT', () => {
      const { type } = (action as InsertAction).args
      const matchBlock = _.find(blockConf, { type }) as Block<typeof type>
      const id = nanoid()
      const newBlock = makeInitialBlock({ id, type, matchBlock })
      const undoThis = getRewindActions.INSERT(id)
      return {
        blocks: pushNew(blocks, newBlock),
        undoActions: pushNew(undoActions, undoThis),
        redoActions,
      }
    })
    .with('UPDATE', () => {
      const { id, diff } = (action as UpdateAction).args
      const idx = blocks.findIndex(b => b.id === id)
      const undoThis = getRewindActions.UPDATE(id, blocks[idx].formatArg)
      return {
        blocks: blocks.map((b, i) =>
          i === idx ? { ...b, formatArg: { ...b.formatArg, ...diff } } : b
        ),
        undoActions: pushNew(undoActions, undoThis),
        redoActions,
      }
    })
    .with('DELETE', () => {
      const { id } = (action as DeleteAction).args
      const target = blocks.find(block => block.id === id) as BlockState
      const { type, formatArg } = target
      const undoThis = getRewindActions.DELETE(type, id, formatArg)
      return {
        blocks: _.reject(state.blocks, { id }),
        undoActions: pushNew(undoActions, undoThis),
        redoActions,
      }
    })
    .with('DRAG_SORT', () => {
      const { old_pos, new_pos } = (action as DragSortAction).args
      const undoThis = getRewindActions.DRAG_SORT(old_pos, new_pos)
      return {
        blocks: arrayMoveImmutable(state.blocks, old_pos, new_pos),
        undoActions: pushNew(undoActions, undoThis),
        redoActions,
      }
    })
    .with('MOVE_UP', () => {
      const { old_pos } = (action as MoveUpAction).args
      const undoThis = getRewindActions.MOVE_UP(old_pos)
      return {
        blocks: arrayMoveImmutable(state.blocks, old_pos, old_pos - 1),
        undoActions: pushNew(undoActions, undoThis),
        redoActions,
      }
    })
    .with('MOVE_DOWN', () => {
      const { old_pos } = (action as MoveDownAction).args
      const undoThis = getRewindActions.MOVE_DOWN(old_pos)
      return {
        blocks: arrayMoveImmutable(state.blocks, old_pos, old_pos + 1),
        undoActions: pushNew(undoActions, undoThis),
        redoActions,
      }
    })
    .with('CONSUME_UNDO', () => {
      return {
        blocks,
        undoActions: cutLast(undoActions),
        redoActions: pushNew(redoActions, last(undoActions)),
      }
    })
    .with('CONSUME_REDO', () => {
      return {
        blocks,
        undoActions,
        redoActions: cutLast(redoActions),
      }
    })
    .exhaustive()
}
