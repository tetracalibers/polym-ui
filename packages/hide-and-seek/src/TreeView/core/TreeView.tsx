import {
  Children,
  ComponentPropsWithoutRef,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
} from 'react'
import { useShareState } from '../../hooks/useShareState'

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
      <div id={label}>{topRoot}</div>
      <ul role='tree' aria-labelledby={label}>
        {child}
      </ul>
    </TreeContext.Provider>
  )
}

/* -------------------------------------------- */

type SubTreeProps = {
  children: [ReactNode, ReactNode]
}

const SubTree = ({ children }: SubTreeProps) => {
  const [root, child] = Children.toArray(children)

  const { format } = useContext(TreeContext)
  const subRootFormatter = format?.subRoot
  const subRoot = subRootFormatter ? subRootFormatter(root) : root

  return (
    <li role='treeitem' aria-expanded={false} aria-selected={false}>
      <div>{subRoot}</div>
      <ul role='group'>{child}</ul>
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
    <li role='treeitem' {...attrs}>
      {leaf}
    </li>
  )
}

/* -------------------------------------------- */

Tree.SubTree = SubTree
Tree.Leaf = Leaf
