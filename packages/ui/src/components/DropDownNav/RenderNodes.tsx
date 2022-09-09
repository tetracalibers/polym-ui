import { Menu } from './helper/type'
import { TreeNode } from '@polym/tree-logic'
import { FC, useMemo } from 'react'
import { nanoid } from 'nanoid'

type RenderNodesProps = {
  item: Menu
  parentNode: TreeNode
}

const buildNode = ({
  type,
  parentNode,
  previousNode,
  index,
  title,
}: {
  type: 'leaf' | 'node'
  parentNode: TreeNode
  previousNode: TreeNode
  index: number
  title: string
}) => {
  const key = nanoid()
  const path = [...parentNode.path, index]
  const currentNode: TreeNode = new TreeNode(path)

  currentNode.type = type
  currentNode.name = title
  currentNode.parent = parentNode

  if (previousNode === null) {
    previousNode = currentNode
  } else {
    previousNode.next = currentNode
    currentNode.previous = previousNode
    previousNode = currentNode
  }

  return { currentNode, key }
}

const RenderNodes: FC<RenderNodesProps> = ({ item, parentNode }) => {
  let previousNode: TreeNode = null!

  const Nodes = useMemo(() => {
    const nodes = item.subMenus
    if (nodes === undefined) {
      const { key, currentNode } = buildNode({
        type: 'leaf',
        parentNode,
        previousNode,
        index: 0,
        title: item.title,
      })
    } else {
      nodes!.map((node, index) => {
        const { key, currentNode } = buildNode({
          type: 'node',
          parentNode,
          previousNode,
          index,
          title: node.title,
        })
      })
    }
  }, [])

  return <></>
}
