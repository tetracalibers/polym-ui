import {
  Children,
  ComponentPropsWithoutRef,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react'
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
        <div id={label}>{topRoot}</div>
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

  const { format } = useContext(TreeContext)
  const subRootFormatter = format?.subRoot
  const subRoot = subRootFormatter ? subRootFormatter(root) : root

  const [isOpen, setOpenStatus] = useState(false)
  const toggleOpen = () => setOpenStatus(!isOpen)

  return (
    <li role='treeitem' aria-expanded={isOpen} aria-selected={isOpen}>
      <div onClick={toggleOpen}>{subRoot}</div>
      {isOpen && <ul role='group'>{child}</ul>}
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
