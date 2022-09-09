import { Path } from '@polym/tree-logic'
import { TreeNode } from '@polym/tree-logic'

export type MutableTreeState = { selected: TreeNode | Path; expanded: Path[] }
