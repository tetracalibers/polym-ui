import { useReducer } from 'react'
import { IconOnly } from '../core/IconOnly'
import { blockConf } from './module/block'
import { reducer } from './module/reducer'

export const BlockEditor = () => {
  const [blocks, dispatch] = useReducer(reducer, [])

  return (
    <>
      {blockConf.map(block => {
        return (
          <IconOnly.Button
            label={block.type}
            icon={block.icon}
            onClick={() =>
              dispatch({ type: 'INSERT', args: { type: block.type } })
            }
          />
        )
      })}
      {blocks.map(block => (
        <textarea placeholder={block.type}></textarea>
      ))}
    </>
  )
}
