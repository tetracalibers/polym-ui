import { useCallback, useReducer } from 'react'
import { HistoryState, historyReducer, getInitialHistory } from './reducer'

type Present<T> = HistoryState<T>['present']

export const useHistory = <T>(initialPresent: Present<T>) => {
  const [state, dispatch] = useReducer(
    historyReducer,
    getInitialHistory(initialPresent)
  )

  const canUndo = state.past.length !== 0
  const canRedo = state.future.length !== 0

  const undo = useCallback(() => {
    if (canUndo) {
      dispatch({ type: 'UNDO' })
    }
  }, [canUndo, dispatch])

  const redo = useCallback(() => {
    if (canRedo) {
      dispatch({ type: 'REDO' })
    }
  }, [canRedo, dispatch])

  const setHistory = useCallback(
    (newPresent: Present<T>) =>
      dispatch({ type: 'SET_HISTORY', args: { newPresent } }),
    [dispatch]
  )

  const clearHistory = useCallback(
    () => dispatch({ type: 'CLEAR_HISTORY', args: { initialPresent } }),
    [dispatch]
  )

  return {
    state: state.present,
    setHistory,
    undo,
    redo,
    clearHistory,
    canUndo,
    canRedo,
  } as const
}
