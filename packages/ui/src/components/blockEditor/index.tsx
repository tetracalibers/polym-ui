import { useReducer } from 'react'
import { IconOnly } from '../core/IconOnly'
import { blockConf } from './module/block'
import { reducer } from './module/reducer'

export const BlockEditor = () => {
  const [blocks, dispatch] = useReducer(reducer, [])

  return (
    <>
      {
        /* toolBar */ blockConf.map(block => {
          return (
            <IconOnly.Button
              label={block.type}
              icon={block.icon}
              onClick={() =>
                dispatch({ type: 'INSERT', args: { type: block.type } })
              }
              key={block.type}
            />
          )
        })
      }
      {
        /* editor */ blocks.map(block => (
          <textarea
            placeholder={block.type}
            onChange={e =>
              dispatch({
                type: 'UPDATE',
                args: { key: block.key, content: e.target.value },
              })
            }
            key={block.key}
          ></textarea>
        ))
      }
      {
        /* preview */ blocks.map(block => (
          <span key={block.key}>{block.format(block.content)}</span>
        ))
      }
    </>
  )
}
