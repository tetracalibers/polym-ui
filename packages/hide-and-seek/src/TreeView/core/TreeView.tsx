import {
  Children,
  ComponentPropsWithoutRef,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
  KeyboardEvent,
  useRef,
  cloneElement,
} from 'react'
import { match } from 'ts-pattern'
import { useShareState } from '../../hooks/useShareState'
import { Wrapper } from '../styled'

/* -------------------------------------------- */

type FormatFunc = (children: ReactNode) => ReactElement

type TreeProps = {
  children: [ReactNode, ReactNode]
  label: string
  format?: {
    topRoot?: FormatFunc
    subRoot?: FormatFunc
    leaf?: FormatFunc
  }
}

type ShareState = {
  format: TreeProps['format']
}

const TreeContext = createContext<ShareState>({} as ShareState)

export const Tree = ({ children, label, format }: TreeProps) => {
  const [root, child] = Children.toArray(children)

  const shareState = useShareState({ format }, [])

  const topRootFormatter = format?.topRoot
  const topRoot = topRootFormatter ? topRootFormatter(root) : root

  return (
    <TreeContext.Provider value={shareState}>
      <Wrapper>
        <div id={label} tabIndex={0}>
          {topRoot}
        </div>
        <ul role='tree' aria-labelledby={label}>
          {child}
        </ul>
      </Wrapper>
    </TreeContext.Provider>
  )
}

/* -------------------------------------------- */

type SubTreeProps = {
  children: [ReactNode, ReactNode]
}

const SubTree = ({ children }: SubTreeProps) => {
  const [root, child] = Children.toArray(children)

  const childWrapEref = useRef<HTMLUListElement>(null)
  const subTreeRootEref = useRef<HTMLLIElement>(null)

  // カスタムコンポーネントが指定されていれば置き換え
  const { format } = useContext(TreeContext)
  const subRootFormatter = format?.subRoot
  const subRoot = subRootFormatter
    ? cloneElement(subRootFormatter(root), { role: 'presentation' })
    : root

  // 開閉管理
  const [isOpen, setOpenStatus] = useState(false)
  const toggleOpen = () => setOpenStatus(!isOpen)

  // キーボード操作
  const moveByKey = (e: KeyboardEvent<HTMLDivElement>) => {
    match(e.key)
      .with('ArrowRight', () => {
        // 閉じたノードにフォーカスがある場合、ノードを開く
        !isOpen && setOpenStatus(true)
        // TODO フォーカスが開いているノードにある場合、フォーカスを最初の子ノードに移動
        // TODO フォーカスが終了ノードにある場合、何もしません。
      })
      .with('ArrowLeft', () => {
        // 開いているノードにフォーカスがある場合、ノードを閉じます。
        isOpen && setOpenStatus(false)
        // TODO エンド ノードまたは閉じたノードでもある子ノードにフォーカスがある場合、フォーカスをその親ノードに移動
        // TODO エンド ノードまたは閉じたノードでもあるルート ノードにフォーカスがある場合、 は何もしません
      })
      .with('ArrowDown', () => {
        // TODO ノードを開いたり閉じたりせずに、フォーカス可能な次のノードにフォーカスを移動
      })
      .with('ArrowUp', () => {
        // TODO ノードを開いたり閉じたりせずに、フォーカス可能な前のノードにフォーカスを移動
      })
      .with('Home', () => {
        // TODO ノードを開いたり閉じたりせずに、ツリーの最初のノードにフォーカスを移動
      })
      .with('End', () => {
        // TODO ノードを開かずにフォーカス可能なツリー内の最後のノードにフォーカスを移動
      })
      .with('Enter', () => {
        // ノードを開閉
        toggleOpen()
      })
      .otherwise(() => {})
  }

  return (
    <li
      role='treeitem'
      aria-expanded={isOpen}
      aria-selected={isOpen}
      ref={subTreeRootEref}
    >
      <div onClick={toggleOpen} onKeyDown={moveByKey} tabIndex={0}>
        {subRoot}
      </div>
      {isOpen && (
        <ul role='group' ref={childWrapEref}>
          {child}
        </ul>
      )}
    </li>
  )
}
/* -------------------------------------------- */

type LeafProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'li'>

const Leaf = ({ children, ...attrs }: LeafProps) => {
  const { format } = useContext(TreeContext)
  const leafFormatter = format?.leaf
  const leaf = leafFormatter ? leafFormatter(children) : children

  return (
    <li role='treeitem' {...attrs} tabIndex={0}>
      {leaf}
    </li>
  )
}

/* -------------------------------------------- */

Tree.SubTree = SubTree
Tree.Leaf = Leaf
