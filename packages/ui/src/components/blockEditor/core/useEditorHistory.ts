import { useCallback, useReducer, useEffect } from 'react'
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

  //useEffect(() => {
  //  console.log(state.undoActions)
  //}, [state.undoActions])

  const undo = useCallback(() => {
    if (canUndo) {
      const actions = last(state.undoActions)
      actions.forEach(action =>
        dispatch({
          type: action.type,
          args: { ...action.args, by: 'undo' },
        } as Action)
      )
    }
  }, [canUndo, dispatch, state.undoActions])

  const redo = useCallback(() => {
    if (canRedo) {
      const actions = last(state.redoActions)
      actions.forEach(action =>
        dispatch({
          type: action.type,
          args: { ...action.args, by: 'redo' },
        } as Action)
      )
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
