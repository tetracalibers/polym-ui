import {
  forwardRef,
  useCallback,
  useEffect,
  useState,
  useMemo,
  useRef,
  memo,
  AriaAttributes,
  ForwardRefRenderFunction,
  KeyboardEventHandler,
  MouseEventHandler,
  ForwardedRef,
  Ref,
} from 'react'

import { NodeLabel } from './NodeLabel'
import { Path } from '@polym/tree-logic'
import { isNode, Keyboard } from '@polym/tree-logic'
import styled from 'styled-components'
import { NodeProps } from '../NodeProps'

const isFunction = (val: any): val is (...args: any[]) => any => {
  return typeof val === 'function'
}

const setRef = <V extends any>(ref: ForwardedRef<V>, value: V) => {
  if (ref) {
    if (isFunction(ref)) {
      ref(value)
    } else {
      ref.current = value
    }
  }
}

// MUI Inspired
const useForkRef = <T extends any>(ref1: Ref<T>, ref2: Ref<T>) => {
  return useMemo(() => {
    return (value: T) => {
      setRef(ref1, value)
      setRef(ref2, value)
    }
    // Don't know what eslint wants with type 'T'
  }, [ref1, ref2])
}

const StyledNode = styled.li<{ insetFactor: number }>`
  --inset-factor: ${({ insetFactor }) => insetFactor};
  overflow: visible;
  position: relative;

  &:focus {
    outline: none;

    & > div::after {
      /* Both, '0.5', values used are not magic numbers. They are from
        the chevron-right svg in 'NodeLabel' which is inset by -0.5rem
        This is to make it wrap within the viewbox of this pesudo element */
      content: '';
      position: absolute;
      width: calc(100% + var(--inset-factor) - 0.5rem);
      height: 28px;
      margin-left: calc(-1 * var(---inset-factor) + 0.5rem);
      background: rgba(25, 63, 233, 0.2);
    }
  }
`

const INode: ForwardRefRenderFunction<HTMLLIElement, NodeProps> = (
  { children, className, node, treeState, onClick, onKeyDown, ...rest },
  ref
) => {
  const getTree = useCallback(() => treeState.current, [treeState])

  const getSelectedPath = useCallback(() => {
    const { selected } = getTree()
    return Array.isArray(selected) ? selected : selected.path
  }, [getTree])

  const [isExpanded, setIsExpanded] = useState(() => {
    const { expanded } = getTree()
    return expanded.some(path => Path.equal(path, node.path))
  })

  const [isSelected, setIsSelected] = useState(() => {
    const path = getSelectedPath()
    return Path.equal(path, node.path)
  })

  const [isSelectedIn, setIsSelectedIn] = useState(() => node.selectedin())
  const treeItem = useRef<HTMLLIElement>(null!)
  const setTreeItem = useForkRef(treeItem, ref)

  useEffect(() => {
    // Synchronize state between component and data structure
    if (isExpanded !== node.expanded()) {
      if (node.expanded()) {
        node.collapse()
      } else {
        node.expand()
      }
    }

    if (isSelected !== node.selected()) {
      if (node.selected()) {
        node.deselect()
      } else {
        node.select()
      }
    }
  }, [])

  const removePath = <T extends Path>(collection: T[], item: T) => {
    return collection.filter(path => !Path.equal(item, path))
  }

  const tree = getTree()
  const type = node.type

  useEffect(() => {
    node
      .on('selectin', () => {
        setIsSelectedIn(true)
      })

      .on('selectout', () => {
        setIsSelectedIn(false)
      })

      .on('select', () => {
        if (!Array.isArray(tree.selected)) {
          tree.selected.deselect()
        }

        if ((isNode(type) && !node.expanded()) || !isNode(type)) {
          node.parent?.selectin()
        }

        tree.selected = node
        treeItem.current.focus()
        setIsSelected(true)
      })

      .on('deselect', () => {
        node.parent?.selectout()
        setIsSelected(false)
      })

      .on('expand', () => {
        tree.expanded = removePath(tree.expanded, node.path).concat([node.path])

        if (isNode(type) && node.parent?.selectedin()) node.parent.selectout()

        setIsExpanded(true)
      })

      .on('collapse', () => {
        tree.expanded = removePath(tree.expanded, node.path)
        node.children.clear()

        if (!node.parent?.selectedin()) node.parent?.selectin()

        setIsExpanded(false)
      })

    const indexOfNodeInParentStack = Path.end(node.path)

    if (indexOfNodeInParentStack) {
      node.parent!.children.remove(indexOfNodeInParentStack)
    }

    node.parent!.children.add(node)
  }, [node])

  const ariaAttribute: keyof AriaAttributes = isNode(type)
    ? 'aria-expanded'
    : 'aria-selected'
  const aria: AriaAttributes = { [ariaAttribute]: isExpanded }
  const pathActive = isSelected || isSelectedIn

  const handleItemClick: MouseEventHandler<HTMLLIElement> = evt => {
    node.select()

    if (isNode(type)) {
      if (node.expanded()) {
        node.collapse()
      } else {
        node.expand()
      }
    } else {
      node.expand()
    }

    evt.stopPropagation()
    onClick?.(evt)
  }

  const handleKeydown: KeyboardEventHandler<HTMLLIElement> = evt => {
    const e = evt as unknown as KeyboardEvent

    Keyboard.handleArrowDown(e, node)
    Keyboard.handleArrowUp(e, node)
    Keyboard.handleArrowLeft(e, node)
    Keyboard.handleArrowRight(e, node)
    Keyboard.handleEnter(e, node)
    Keyboard.handleHome(e, node)
    Keyboard.handleEnd(e, node)
    Keyboard.handleAsterisk(e, node)

    evt.stopPropagation()
    onKeyDown?.(evt)
  }

  const insetFactor = node.path.length

  return (
    <StyledNode
      tabIndex={isSelected ? 0 : -1}
      role='treeitem'
      ref={setTreeItem}
      onClick={handleItemClick}
      onKeyDown={handleKeydown}
      insetFactor={insetFactor}
      {...aria}
      {...rest}
    >
      <NodeLabel type={node.type} name={node.name} open={isExpanded} />
      {isExpanded && children}
    </StyledNode>
  )
}

export const Node = memo(forwardRef(INode))
