import { useReducer } from 'react'
import { HorizontalStack } from '../layout-algorithm/HorizontalStack'
import { VerticalStack } from '../layout-algorithm/VerticalStack'
import { EditorBlock } from './EditorBlock'
import { blockConf } from './module/block'
import { reducer } from './module/reducer'
import { Toolbar } from './Toolbar'

export const BlockEditor = () => {
  const [blocks, dispatch] = useReducer(reducer, [])

  return (
    <HorizontalStack>
      <VerticalStack>
        <div>
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
        </div>
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
            />
          ))
        }
      </VerticalStack>
      <div>
        {
          /* preview */ blocks.map(block => (
            <span key={block.key}>{block.format(block.content)}</span>
          ))
        }
      </div>
    </HorizontalStack>
  )
}
