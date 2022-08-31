import { LiHTMLAttributes, MutableRefObject } from 'react'
import { TreeNode, MutableTreeState } from './structure'

export interface NodeProps extends LiHTMLAttributes<HTMLLIElement> {
  node: TreeNode
  treeState: MutableRefObject<MutableTreeState>
  expanded?: boolean
}
