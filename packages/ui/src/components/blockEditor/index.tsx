import { createContext, Dispatch, Fragment, useReducer } from 'react'
import { VerticalStack } from '../layout-algorithm/VerticalStack'
import { WithSidebar } from '../layout-algorithm/WithSidebar'
import { EditorBlock } from './EditorBlock'
import { blockConf } from './core/config'
import { Action, reducer } from './core/reducer'
import { EditPanel, PreviewPanel } from './styled/panel'
import { ToolButton } from './button/ToolButton'
import { DifferStack } from '../layout-algorithm/DifferStack'
import { DragSortable } from './blocks/DragSortable'
import { PosDiff } from './types/PosDiff'
import { RequiredNotNull } from './types/RequiredNotNull'

type BlockEditorState = {
  dispatch: Dispatch<Action>
}

export const BlockEditorContext = createContext<BlockEditorState>(
  {} as BlockEditorState
)

export const BlockEditor = () => {
  const [blocks, dispatch] = useReducer(reducer, [])

  const sortBydrop = (pos: RequiredNotNull<PosDiff>) => {
    dispatch({
      type: 'DRAG_SORT',
      args: {
        old_pos: pos.old,
        new_pos: pos.new,
      },
    })
  }

  return (
    <BlockEditorContext.Provider value={{ dispatch }}>
      <VerticalStack as={EditPanel}>
        <DifferStack justifyContent='center'>
          {
            /* toolBar */ blockConf.map(block => {
              return (
                <ToolButton
                  type={block.type}
                  icon={block.icon}
                  key={block.type}
                />
              )
            })
          }
        </DifferStack>
        <WithSidebar mainMinWidth={40} sideWidth='40vw'>
          <VerticalStack spaceV={1}>
            <DragSortable
              render={(block, idx) => (
                <EditorBlock
                  block={block}
                  pos={idx}
                  maxPos={blocks.length - 1}
                />
              )}
              items={blocks}
              sortFn={sortBydrop}
            />
          </VerticalStack>
          <PreviewPanel>
            {
              /* preview */ blocks.map(block => (
                <Fragment key={block.id}>
                  {block.format(block.formatArg as any)}
                </Fragment>
              ))
            }
          </PreviewPanel>
        </WithSidebar>
      </VerticalStack>
    </BlockEditorContext.Provider>
  )
}
