import { LiHTMLAttributes, MutableRefObject } from 'react'
import { MutableTreeState } from './MutableTreeState'
import { TreeNode } from '@polym/tree-logic'

export interface NodeProps extends LiHTMLAttributes<HTMLLIElement> {
  node: TreeNode
  treeState: MutableRefObject<MutableTreeState>
  expanded?: boolean
}
