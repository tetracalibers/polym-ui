import {
  createContext,
  Dispatch,
  DragEvent,
  useReducer,
  useRef,
  useState,
} from 'react'
import { VerticalStack } from '../layout-algorithm/VerticalStack'
import { WithSidebar } from '../layout-algorithm/WithSidebar'
import { EditorBlock } from './EditorBlock'
import { blockConf } from './module/block'
import { Action, reducer } from './module/reducer'
import { EditPanel, PreviewPanel } from './styled/panel'
import { ToolButton } from './button/ToolButton'
import { DifferStack } from '../layout-algorithm/DifferStack'
import { InsertHere } from './nav/InsertHere'

type BlockEditorState = {
  dispatch: Dispatch<Action>
}

export const BlockEditorContext = createContext<BlockEditorState>(
  {} as BlockEditorState
)

export const BlockEditor = () => {
  const [blocks, dispatch] = useReducer(reducer, [])

  const oldPos = useRef<number | null>(null)
  const [newPos, setNewPos] = useState<number | null>(null)

  const dragStart = (_e: DragEvent<HTMLDivElement>, idx: number) => {
    oldPos.current = idx
  }

  const dragEnter = (_e: DragEvent<HTMLDivElement>, idx: number) => {
    setNewPos(idx)
  }

  const sortBydrop = () => {
    const old_pos = oldPos.current
    const new_pos = newPos

    if (old_pos !== null && new_pos !== null) {
      dispatch({
        type: 'DRAG_SORT',
        args: {
          old_pos,
          new_pos,
        },
      })
    }

    oldPos.current = null
    setNewPos(null)
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
            {
              /* editor */ blocks.map((block, idx) => (
                <>
                  {
                    /* 下へ移動中 */ idx === newPos &&
                      newPos < oldPos.current! && <InsertHere />
                  }
                  <div
                    draggable
                    onDragStart={e => dragStart(e, idx)}
                    onDragEnter={e => dragEnter(e, idx)}
                    onDragEnd={sortBydrop}
                    key={block.key}
                  >
                    <EditorBlock
                      type={block.type}
                      id={block.key}
                      pos={idx}
                      maxPos={blocks.length - 1}
                    />
                  </div>
                  {
                    /* 上へ移動中 */ idx === newPos &&
                      newPos > oldPos.current! && <InsertHere />
                  }
                </>
              ))
            }
          </VerticalStack>
          <PreviewPanel>
            {
              /* preview */ blocks.map(block => (
                <span key={block.key}>
                  {block.format(block.formatArg as any)}
                </span>
              ))
            }
          </PreviewPanel>
        </WithSidebar>
      </VerticalStack>
    </BlockEditorContext.Provider>
  )
}
