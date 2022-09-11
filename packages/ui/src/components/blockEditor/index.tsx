import { useReducer } from 'react'
import { HorizontalStack } from '../layout-algorithm/HorizontalStack'
import { VerticalStack } from '../layout-algorithm/VerticalStack'
import { WithSidebar } from '../layout-algorithm/WithSidebar'
import { EditorBlock } from './EditorBlock'
import { blockConf } from './module/block'
import { reducer } from './module/reducer'
import { EditPanel, PreviewPanel } from './styled/panel'
import { ToolButton } from './button/ToolButton'
import { DifferStack } from '../layout-algorithm/DifferStack'

export const BlockEditor = () => {
  const [blocks, dispatch] = useReducer(reducer, [])

  return (
    <WithSidebar as={EditPanel} mainMinWidth={40} sideWidth='40vw'>
      <VerticalStack>
        <DifferStack justifyContent={'space-evenly'}>
          {
            /* toolBar */ blockConf.map(block => {
              return (
                <ToolButton
                  type={block.type}
                  icon={block.icon}
                  insertFn={() =>
                    dispatch({ type: 'INSERT', args: { type: block.type } })
                  }
                  key={block.type}
                />
              )
            })
          }
        </DifferStack>
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
              id={block.key}
            />
          ))
        }
      </VerticalStack>
      <PreviewPanel>
        {
          /* preview */ blocks.map(block => (
            <span key={block.key}>{block.format(block.content)}</span>
          ))
        }
      </PreviewPanel>
    </WithSidebar>
  )
}
