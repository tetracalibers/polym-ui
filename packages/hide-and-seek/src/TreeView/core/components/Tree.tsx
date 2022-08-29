/* eslint-disable no-use-before-define */
import {
  useRef,
  forwardRef,
  FC,
  ForwardRefRenderFunction,
  Fragment,
  MutableRefObject,
} from 'react'
import { Node } from './Node'
import { RootNode, RootProps } from './Root'
import { TreeNode, MutableTreeState } from '../structure'
import { INode } from '../DataType'

export type TreeProps = {
  root: INode[]
  treeState?: MutableTreeState
}

type RenderNodesProps = {
  nodes: INode['items']
  parentNode: TreeNode
  treeState: MutableRefObject<MutableTreeState>
}

const RenderNodes: FC<RenderNodesProps> = ({
  nodes,
  parentNode,
  treeState,
}) => {
  let previousNode: TreeNode = null!

  return (
    <Fragment>
      {nodes.map((node, index) => {
        const key = `${node.type}-${node.name}`
        const path = [...parentNode.path, index]
        const currentNode: TreeNode = new TreeNode(path)

        currentNode.type = node.type
        currentNode.name = node.name
        currentNode.parent = parentNode

        if (previousNode === null) {
          previousNode = currentNode
        } else {
          previousNode.next = currentNode
          currentNode.previous = previousNode
          previousNode = currentNode
        }

        return (
          <Node
            treeState={treeState}
            node={currentNode}
            aria-setsize={nodes.length}
            aria-posinset={index + 1}
            aria-level={path.length}
            key={key}
          >
            {node.type === 'node' && (
              <ul>
                <RenderNodes
                  nodes={node.items}
                  treeState={treeState}
                  parentNode={currentNode}
                />
              </ul>
            )}
          </Node>
        )
      })}
    </Fragment>
  )
}

const ITree: ForwardRefRenderFunction<
  HTMLUListElement,
  RootProps & TreeProps
> = ({ root, treeState = { selected: [0], expanded: [] }, ...rest }, ref) => {
  const state = useRef<MutableTreeState>({
    selected: treeState.selected,
    expanded: treeState.expanded,
  })

  const rootNode = new TreeNode([])

  return (
    <RootNode ref={ref} {...rest}>
      <RenderNodes nodes={root} parentNode={rootNode} treeState={state} />
    </RootNode>
  )
}

export const Tree = forwardRef(ITree)
