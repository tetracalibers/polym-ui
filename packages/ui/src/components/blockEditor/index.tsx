import { useReducer } from 'react'
import { IconOnly } from '../core/IconOnly'
import { EditorBlock } from './EditorBlock'
import { blockConf } from './module/block'
import { reducer } from './module/reducer'
import { Toolbar } from './Toolbar'

export const BlockEditor = () => {
  const [blocks, dispatch] = useReducer(reducer, [])

  return (
    <>
      {
        /* toolBar */ blockConf.map(block => {
          return (
            <Toolbar
              type={block.type}
              icon={block.icon}
              insertFn={() =>
                dispatch({ type: 'INSERT', args: { type: block.type } })
              }
            />
          )
        })
      }
      {
        /* editor */ blocks.map(block => (
          <EditorBlock
            type={block.type}
            updateFn={e =>
              dispatch({
                type: 'UPDATE',
                args: { key: block.key, content: e.target.value },
              })
            }
            key={block.key}
          ></EditorBlock>
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
