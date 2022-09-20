import { match } from 'ts-pattern'
import { BlockType } from '../core/config'
import { Store as BlockState } from '../core/reducer'

export type HistoryState = {
  past: BlockState[]
  present: BlockState
  future: BlockState[]
}

export const initialHistoryState: HistoryState = {
  // 過去の状態
  past: [],
  // 今の状態
  present: {} as BlockState,
  // undo履歴
  future: [],
}

export type UndoAction = {
  type: 'UNDO'
}

export type RedoAction = {
  type: 'REDO'
}

export type SetHistoryAction<T extends BlockType = BlockType> = {
  type: 'SET_HISTORY'
  args: {
    newPresent: BlockState<T>
  }
}

export type ClearHistoryAction<T extends BlockType = BlockType> = {
  type: 'CLEAR_HISTORY'
  args: {
    initialPresent: BlockState<T>
  }
}

export type HistoryAction =
  | UndoAction
  | RedoAction
  | ClearHistoryAction
  | SetHistoryAction

export const historyReducer = (state: HistoryState, action: HistoryAction) => {
  const { past, present, future } = state

  return match(action.type)
    .with('UNDO', () => {
      const previous = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      } as HistoryState
    })
    .with('REDO', () => {
      const next = future[0]
      const newFuture = future.slice(1)
      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      } as HistoryState
    })
    .with('SET_HISTORY', () => {
      const { newPresent } = (action as SetHistoryAction).args
      if (newPresent === present) {
        return state
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      } as HistoryState
    })
    .with('CLEAR_HISTORY', () => {
      const { initialPresent } = (action as ClearHistoryAction).args
      return {
        ...initialHistoryState,
        present: initialPresent,
      } as HistoryState
    })
    .exhaustive()
}
