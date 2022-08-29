/* eslint-disable no-useless-call */
/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
import _ from 'lodash'

export type Path = number[]
export type MutableTreeState = { selected: TreeNode | Path; expanded: Path[] }

type TreeNodeEvent =
  | 'select'
  | 'deselect'
  | 'expand'
  | 'collapse'
  | 'selectin'
  | 'selectout'
type TreeNodeEventHandler = <T>(...args: T[]) => void

export class Stack<T> {
  private stack: T[] = []

  public get size() {
    return this.stack.length
  }

  public toArray() {
    return new Array<T>().concat(this.stack)
  }

  public clear(): this {
    this.stack.splice(0, this.size)
    return this
  }

  public add(item: T): this {
    this.stack = this.toArray().concat(item)
    return this
  }

  public remove(index: number): this {
    this.stack.splice(index, 1)
    return this
  }

  public item(index: number): T | null {
    return _.nth(this.stack, index) || null
  }

  public first(): T | null {
    return this.item(0)
  }

  public last(): T | null {
    return this.item(-1)
  }
}

export abstract class Node<T extends Node<T>> {
  public name = ''
  public id = ''
  public type: 'node' | 'leaf' = 'node'
  public next: T | null = null
  public previous: T | null = null
  public parent: T | null = null
  public children = new Stack<T>()

  public hasNext(): boolean {
    return this.next !== null
  }

  public hasPrevious(): boolean {
    return this.previous !== null
  }

  public hasParent(): boolean {
    return this.parent !== null
  }

  public hasChildren(): boolean {
    return this.children.size !== 0
  }
}

export class TreeNode extends Node<TreeNode> {
  private isSelected = false
  private isSelectedIn = false
  private isExpanded = false
  private handlers = new Map<TreeNodeEvent, TreeNodeEventHandler>()

  constructor(public path: Path) {
    super()
  }

  public has(child: TreeNode | null): boolean {
    if (!child) return false
    return this.children.toArray().some(item => {
      return Path.equal(item.path, child.path)
    })
  }

  public selectedin() {
    return this.isSelectedIn
  }

  public selected() {
    return this.isSelected
  }

  public expanded() {
    return this.isExpanded
  }

  public on(event: TreeNodeEvent, handler: TreeNodeEventHandler): this {
    this.handlers.set(event, handler)
    return this
  }

  public selectin<T>(...args: T[]): this {
    const handler = this.handlers.get('selectin')
    handler?.call(null, ...args)
    this.isSelectedIn = true
    return this
  }

  public selectout<T>(...args: T[]): this {
    const handler = this.handlers.get('selectout')
    handler?.call(null, ...args)
    this.isSelectedIn = false
    return this
  }

  public select<T>(...args: T[]): this {
    const handler = this.handlers.get('select')
    handler?.call(null, ...args)
    this.isSelected = true
    return this
  }

  public deselect<T>(...args: T[]): this {
    const handler = this.handlers.get('deselect')
    handler?.call(null, ...args)
    this.isSelected = false
    return this
  }

  public expand<T>(...args: T[]): this {
    const handler = this.handlers.get('expand')
    handler?.call(null, ...args)
    this.isExpanded = true
    return this
  }

  public collapse<T>(...args: T[]): this {
    const handler = this.handlers.get('collapse')
    handler?.call(null, ...args)
    this.isExpanded = false
    return this
  }
}

// eslint-disable-next-line no-redeclare
export const Path = {
  parent(path: Path): Path {
    return _.dropRight(path, 1)
  },

  next(path: Path): Path | null {
    const end = _.nth(path, -1)
    return end === undefined ? null : _.dropRight(path, 1).concat([end + 1])
  },

  previous(path: Path): Path | null {
    const end = _.nth(path, -1)
    return end === 0 || end === undefined
      ? null
      : _.dropRight(path, 1).concat([end - 1])
  },

  start(path: Path) {
    return _.nth(path, 0)
  },

  end(path: Path) {
    return _.nth(path, -1)
  },

  edges(path: Path) {
    return [this.start(path), this.end(path)]
  },

  equal(path1: Path, path2: Path) {
    return _.isEqual(path1, path2)
  },

  has(path1: Path, path2: Path): boolean {
    return Path.equal(_.dropRight(path1), path2)
  },
}
