import { createContext, Dispatch, Fragment, useEffect, useReducer } from 'react'
import { VerticalStack } from '../layout-algorithm/VerticalStack'
import { WithSidebar } from '../layout-algorithm/WithSidebar'
import { EditorBlock } from './EditorBlock'
import { blockConf } from './core/config'
import { Action, reducer, StoreArr } from './core/reducer'
import { EditPanel, PreviewPanel } from './styled/panel'
import { ToolButton } from './button/ToolButton'
import { DifferStack } from '../layout-algorithm/DifferStack'
import { DragSortable } from './blocks/DragSortable'
import { PosDiff } from './types/PosDiff'
import { RequiredNotNull } from './types/RequiredNotNull'
import { useHistory } from './history/useHistory'
import { useShareState } from '@polym/hooks'
import { UndoButton } from './button/UndoButton'
import { RedoButton } from './button/RedoButton'

type BlockEditorState = {
  dispatch: Dispatch<Action>
}

export const BlockEditorContext = createContext<BlockEditorState>(
  {} as BlockEditorState
)

export const BlockEditor = () => {
  const [blocks, dispatch] = useReducer(reducer, [])
  const { setHistory, undo, redo, canUndo, canRedo, currState } =
    useHistory<StoreArr>([])

  useEffect(() => {
    setHistory(blocks)
  }, [blocks])

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
