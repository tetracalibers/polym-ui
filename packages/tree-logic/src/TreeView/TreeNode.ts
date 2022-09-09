import { Node } from './Node'
import { Path } from './Path'

export type TreeNodeEvent =
  | 'select'
  | 'deselect'
  | 'expand'
  | 'collapse'
  | 'selectin'
  | 'selectout'
export type TreeNodeEventHandler = <T>(...args: T[]) => void

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
