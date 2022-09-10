import _ from 'lodash'
import { nanoid } from 'nanoid'
import { match } from 'ts-pattern'
import { BlockType } from './block'

export type Store = {
  content: string
  type: BlockType
  key: string
}

type InsertAction = {
  type: 'INSERT'
  args: {
    type: BlockType
  }
}

type DeleteAction = {
  type: 'DELETE'
  args: {
    key: string
  }
}

type Action = InsertAction | DeleteAction

export const reducer = (state: Store[], action: Action): Store[] => {
  return match(action.type)
    .with('INSERT', () => {
      return [
        ...state,
        { ...action.args, content: '', key: nanoid() },
      ] as Store[]
    })
    .with('DELETE', () => {
      return _.reject(state, { key: (action as DeleteAction).args.key })
    })
    .exhaustive()
}
