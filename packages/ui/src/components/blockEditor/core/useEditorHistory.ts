import { useCallback, useReducer } from 'react'
import { Action } from './actions'
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
      const action = last(state.undoActions)
      dispatch({
        type: action.type,
        args: { ...action.args, by: 'undo' },
      } as Action)
    }
  }, [canUndo, dispatch, state.undoActions])

  const redo = useCallback(() => {
    if (canRedo) {
      const action = last(state.redoActions)
      dispatch({
        type: action.type,
        args: { ...action.args, by: 'redo' },
      } as Action)
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
