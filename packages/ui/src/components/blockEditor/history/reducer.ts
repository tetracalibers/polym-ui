import { match } from 'ts-pattern'

export type HistoryState<T> = {
  past: T[]
  present: T
  future: T[]
}

export const getInitialHistory = <T>(initialPresent: T): HistoryState<T> => ({
  // 過去の状態
  past: [],
  // 今の状態
  present: initialPresent,
  // undo履歴
  future: [],
})

export type UndoAction = {
  type: 'UNDO'
}

export type RedoAction = {
  type: 'REDO'
}

export type SetHistoryAction<T> = {
  type: 'SET_HISTORY'
  args: {
    newPresent: T
  }
}

export type ClearHistoryAction<T> = {
  type: 'CLEAR_HISTORY'
  args: {
    initialPresent: T
  }
}

export type HistoryAction<T> =
  | UndoAction
  | RedoAction
  | ClearHistoryAction<T>
  | SetHistoryAction<T>

export const historyReducer = <T>(
  state: HistoryState<T>,
  action: HistoryAction<T>
) => {
  const { past, present, future } = state

  return match(action.type)
    .with('UNDO', () => {
      const previous = past[past.length - 1]
      const newPast = past.slice(0, past.length - 1)
      return {
        past: newPast,
        present: previous,
        future: [present, ...future],
      } as HistoryState<T>
    })
    .with('REDO', () => {
      const next = future[0]
      const newFuture = future.slice(1)
      return {
        past: [...past, present],
        present: next,
        future: newFuture,
      } as HistoryState<T>
    })
    .with('SET_HISTORY', () => {
      const { newPresent } = (action as SetHistoryAction<T>).args
      if (newPresent === present) {
        return state
      }
      return {
        past: [...past, present],
        present: newPresent,
        future: [],
      } as HistoryState<T>
    })
    .with('CLEAR_HISTORY', () => {
      const { initialPresent } = (action as ClearHistoryAction<T>).args
      return getInitialHistory(initialPresent)
    })
    .exhaustive()
}
