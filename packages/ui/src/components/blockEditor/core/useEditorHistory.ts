import { useCallback, useReducer } from 'react'
import { reducer } from './reducer'
import { last } from './util'

export const useEditorHistory = () => {
  const [state, dispatch] = useReducer(reducer, {
    blocks: [],
    undoActions: [],
    redoActions: [],
  })

  const canUndo = state.undoActions.length > 0
  const canRedo = state.redoActions.length > 0

  const undo = useCallback(() => {
    if (canUndo) {
      const actions = last(state.undoActions)
      actions.forEach(action => dispatch(action))
      dispatch({ type: 'CONSUME_UNDO' })
    }
  }, [canUndo, dispatch, state.undoActions])

  const redo = useCallback(() => {
    if (canRedo) {
      const actions = last(state.redoActions)
      actions.forEach(action => dispatch(action))
      dispatch({ type: 'CONSUME_REDO' })
    }
  }, [canRedo, dispatch, state.redoActions])

  return {
    blocks: state.blocks,
    dispatch,
    undo,
    redo,
    canUndo,
    canRedo,
  }
}
