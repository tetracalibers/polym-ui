import isHotkey from 'is-hotkey'
import { TreeNode } from './TreeNode'
import { Node } from './Node'

export const isNode = (t: any): t is 'node' => t === 'node'
export const isLeaf = (t: any): t is 'leaf' => t === 'leaf'
export const isNodeType = (t: any): t is Node<any> => t instanceof Node

/**
 * Gets the root node at `path []` from any node `path` in the tree
 *
 * @param node The current node to get the root node from
 * @returns `TreeNode`
 */
export const getRootNode = (node: TreeNode): TreeNode => {
  return node.hasParent() ? getRootNode(node.parent!) : node
}

/**
 *  Finds the root node from the current node and gets the power or highest node closest to
 *  the left
 *
 * @param node The current node to find the root node and start node from
 * @returns `TreeNode`
 */
export const getStartNode = (node: TreeNode): TreeNode => {
  return getRootNode(node).children.first()!
}

/**
 * Finds the root node from the current node and gets the base or lowest node closest to the right
 *
 * @param node The current node to find the root node and end node from
 * @returns `TreeNode`
 */
export const getEndNode = (node: TreeNode): TreeNode => {
  const root = getRootNode(node)
  const getLastNode = (node: TreeNode): TreeNode => {
    // Reach next first, before children.
    return node.hasNext()
      ? getLastNode(node.next!)
      : node.hasChildren()
      ? getLastNode(node.children.last()!)
      : node
  }
  return getLastNode(root.children.last()!)
}

/**
 * Gets the base or lowest node of the closest node to the left of the current node
 *
 * @param node The current node to get the base node from
 * @returns `TreeNode`
 */
export const getLeftBaseNode = (node: TreeNode): TreeNode => {
  const getBaseNode = (node: TreeNode): TreeNode => {
    if (isNode(node.type) && node.expanded()) {
      return node.hasChildren() ? getBaseNode(node.children.last()!) : node
    }
    return node
  }

  if (node.hasPrevious()) {
    return getBaseNode(node.previous!)
  }
  return node.hasParent() ? node.parent! : node
}

/**
 * Gets the power or highest node of the closest node to the right of the current node
 *
 * @param node The current node to get the power node from
 * @returns `TreeNode`
 */
export const getRightPowerNode = (node: TreeNode): TreeNode => {
  const getPowerNode = (node: TreeNode): TreeNode => {
    if (!node.hasNext()) {
      return node.hasParent() ? getPowerNode(node.parent!) : node
    }
    return node.next!
  }

  if (isNode(node.type) && node.expanded()) {
    return node.hasChildren() ? node.children.first()! : node
  }
  return getPowerNode(node)
}

/**
 * Expand the current node and all its adjacent nodes
 *
 * @param node The current node to expand all adjacent nodes for
 * @param prev An optional previous node of the current node which could be passed eagerly
 * @param next An optional next node of the current node which could be passed eagerly
 * @returns `void`
 */
export const expandAdjacentNodes = (
  node: TreeNode,
  prev = node.previous,
  next = node.next
): void => {
  ;[node, prev, next].forEach(n => {
    if (isNode(n?.type) && !n?.expanded()) n?.expand()
  })
  return !prev?.hasPrevious() && !next?.hasNext()
    ? undefined
    : expandAdjacentNodes(node, prev?.previous, next?.next)
}

export const handleArrowDown = (evt: KeyboardEvent, node: TreeNode) => {
  const isArrowDown = isHotkey('arrowdown')
  if (isArrowDown(evt)) {
    const next = getRightPowerNode(node)
    // node.deselect()
    next.select()
    evt.preventDefault()
  }
}

export const handleArrowUp = (evt: KeyboardEvent, node: TreeNode) => {
  const isArrowUp = isHotkey('arrowup')
  if (isArrowUp(evt)) {
    const previous = getLeftBaseNode(node)
    // node.deselect()
    previous.select()
    evt.preventDefault()
  }
}

export const handleArrowLeft = (evt: KeyboardEvent, node: TreeNode) => {
  const isArrowLeft = isHotkey('arrowleft')

  if (!isArrowLeft(evt)) return

  const selectParent = () => {
    // node.deselect()
    node.parent!.select()
  }

  if (isNode(node.type)) {
    if (node.expanded()) {
      node.collapse()
      return
    }
  }

  if (node.hasParent()) selectParent()
}

export const handleArrowRight = (evt: KeyboardEvent, node: TreeNode) => {
  const isArrowRight = isHotkey('arrowright')
  if (!isArrowRight(evt)) return

  const selectChild = () => {
    // node.deselect()
    node.children.first()!.select()
  }

  if (isNode(node.type)) {
    if (!node.expanded()) {
      node.expand()
      return
    }

    if (node.hasChildren()) selectChild()
  }
}

export const handleEnter = (evt: KeyboardEvent, node: TreeNode) => {
  const isSpacebar = isHotkey('spacebar')
  const isEnter = isHotkey('return')
  if (isSpacebar(evt) || isEnter(evt)) {
    if (node.expanded()) {
      node.collapse()
    } else {
      node.expand()
    }
  }
}

export const handleHome = (evt: KeyboardEvent, node: TreeNode) => {
  const isHome = isHotkey('home')
  if (isHome(evt)) {
    const startNode = getStartNode(node)
    // node.deselect()
    startNode.select()
  }
}

export const handleEnd = (evt: KeyboardEvent, node: TreeNode) => {
  const isEnd = isHotkey('end')
  if (isEnd(evt)) {
    const endNode = getEndNode(node)
    // node.deselect()
    endNode.select()
  }
}

export const handleAsterisk = (evt: KeyboardEvent, node: TreeNode) => {
  const isAsterisk = isHotkey('shift+8')
  if (isAsterisk(evt) && isNode(node.type)) {
    expandAdjacentNodes(node)
  }
}

export const Keyboard = {
  handleArrowDown,
  handleArrowLeft,
  handleArrowRight,
  handleArrowUp,
  handleAsterisk,
  handleEnd,
  handleEnter,
  handleHome,
}
