import _ from 'lodash'
import { match } from 'ts-pattern'

export type Store = string[]

export type AddAction = {
  type: 'ADD'
  args: {}
}

export type DeleteAction = {
  type: 'DELETE'
  args: {
    pos: number
  }
}

export type UpdateAction = {
  type: 'UPDATE'
  args: {
    pos: number
    item: string
  }
}

export type Action = AddAction | DeleteAction | UpdateAction

export const reducer = (state: Store, action: Action) => {
  return match(action.type)
    .with('ADD', () => {
      return [...state, '']
    })
    .with('DELETE', () => {
      const { pos } = (action as DeleteAction).args
      return state.slice(pos, pos + 1)
    })
    .with('UPDATE', () => {
      const { item, pos } = (action as UpdateAction).args
      const newState = state.map((s, idx) => (idx === pos ? item : s))
      return newState
    })
    .exhaustive()
}
