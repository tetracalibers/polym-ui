import _ from 'lodash'

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
