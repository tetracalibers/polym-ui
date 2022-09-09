import { Stack } from './Stack'

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
