import { createContext, Dispatch, Fragment } from 'react'
import { VerticalStack } from '../layout-algorithm/VerticalStack'
import { WithSidebar } from '../layout-algorithm/WithSidebar'
import { EditorBlock } from './organisms/EditorBlock'
import { blockConf } from './core/config'
import { EditPanel, PreviewPanel } from './styled/panel'
import { ToolButton } from './button/ToolButton'
import { DifferStack } from '../layout-algorithm/DifferStack'
import { DragSortable } from './reusable/DragSortable'
import { PosDiff } from './types/PosDiff'
import { RequiredNotNull } from './types/RequiredNotNull'
import { useShareState } from '@polym/hooks'
import { Action } from './core/actions'
import { useEditorHistory } from './core/useEditorHistory'
import { RedoButton } from './button/RedoButton'
import { UndoButton } from './button/UndoButton'

type BlockEditorState = {
  dispatch: Dispatch<Action>
}

export const BlockEditorContext = createContext<BlockEditorState>(
  {} as BlockEditorState
)

export const BlockEditor = () => {
  const { blocks, dispatch, undo, redo, canUndo, canRedo } = useEditorHistory()

  const sortBydrop = (pos: RequiredNotNull<PosDiff>) => {
    dispatch({
      type: 'DRAG_SORT',
      args: {
        old_pos: pos.old,
        new_pos: pos.new,
      },
    })
  }

  const shareState = useShareState({ dispatch }, [])

  return (
    <BlockEditorContext.Provider value={shareState}>
      <VerticalStack as={EditPanel}>
        <DifferStack justifyContent='center'>
          <UndoButton canUndo={canUndo} undo={undo} />
          <RedoButton canRedo={canRedo} redo={redo} />
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
                  block={block as any}
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
