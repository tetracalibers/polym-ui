import _ from 'lodash'
import { nanoid } from 'nanoid'
import { match } from 'ts-pattern'
import { Block, blockConf } from './config'
import { arrayMoveImmutable } from 'array-move'
import { BlockStateArr } from './store'
import { makeInitialBlock } from './util'
import {
  Action,
  InsertAction,
  UpdateAction,
  DeleteAction,
  DragSortAction,
  MoveUpAction,
  MoveDownAction,
} from './actions'

export type EditorState = {
  blocks: BlockStateArr
  undoActions: Action[]
  redoActions: Action[]
}

export const reducer = (state: EditorState, action: Action): EditorState => {
  const { blocks, undoActions, redoActions } = state

  return match(action.type)
    .with('INSERT', () => {
      const { type } = (action as InsertAction).args
      const matchBlock = _.find(blockConf, { type }) as Block<typeof type>
      const id = nanoid()
      const newBlock = makeInitialBlock({ id, type, matchBlock })
      return {
        blocks: blocks.concat([newBlock] as BlockStateArr),
        undoActions,
        redoActions,
      } as EditorState
    })
    .with('UPDATE', () => {
      const { id, diff } = (action as UpdateAction).args
      const updatedBlocks = blocks.map(s =>
        s.id === id ? { ...s, formatArg: { ...s.formatArg, ...diff } } : s
      )
      return { blocks: updatedBlocks, undoActions, redoActions } as EditorState
    })
    .with('DELETE', () => {
      const { id } = (action as DeleteAction).args
      const updatedBlocks = _.reject(blocks, { id })
      return { blocks: updatedBlocks, undoActions, redoActions } as EditorState
    })
    .with('DRAG_SORT', () => {
      const { old_pos, new_pos } = (action as DragSortAction).args
      const sorted = arrayMoveImmutable(blocks, old_pos, new_pos)
      return { blocks: sorted, undoActions, redoActions } as EditorState
    })
    .with('MOVE_UP', () => {
      const { old_pos } = (action as MoveUpAction).args
      const sorted = arrayMoveImmutable(blocks, old_pos, old_pos - 1)
      return { blocks: sorted, undoActions, redoActions } as EditorState
    })
    .with('MOVE_DOWN', () => {
      const { old_pos } = (action as MoveDownAction).args
      const sorted = arrayMoveImmutable(blocks, old_pos, old_pos + 1)
      return { blocks: sorted, undoActions, redoActions } as EditorState
    })
    .exhaustive() as EditorState
}
