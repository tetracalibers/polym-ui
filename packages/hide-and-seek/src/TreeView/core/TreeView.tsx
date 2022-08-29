import {
  Children,
  ComponentPropsWithoutRef,
  ReactElement,
  ReactNode,
} from 'react'

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

export const Tree = ({ children, label }: TreeProps) => {
  const [root, child] = Children.toArray(children)

  return (
    <>
      <div id={label}>{root}</div>
      <ul role='tree' aria-labelledby={label}>
        {child}
      </ul>
    </>
  )
}

/* -------------------------------------------- */

type SubTreeProps = {
  children: [ReactNode, ReactNode]
}

const SubTree = ({ children }: SubTreeProps) => {
  const [root, child] = Children.toArray(children)

  return (
    <li role='treeitem' aria-expanded={false} aria-selected={false}>
      <div>{root}</div>
      <ul role='group'>{child}</ul>
    </li>
  )
}
/* -------------------------------------------- */

type LeafProps = {
  children: ReactNode
} & ComponentPropsWithoutRef<'li'>

const Leaf = ({ children, ...attrs }: LeafProps) => {
  return (
    <li role='treeitem' {...attrs}>
      {children}
    </li>
  )
}

/* -------------------------------------------- */

Tree.SubTree = SubTree
Tree.Leaf = Leaf
