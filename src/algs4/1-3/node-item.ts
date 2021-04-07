import { INodeItem, INodeIterator } from '@/types'

/**
 * 链表节点
 */
export class NodeItem<T> implements INodeItem<T> {
  item: T
  next: NodeItem<T>
}

/**
 * 链表 迭代
 */
export class NodeIterator<T> implements INodeIterator<T> {
  private current: NodeItem<T>

  protected setCurrent(first: NodeItem<T>) {
    this.current = first
  }

  hasNext(): boolean {
    return this.current && this.current !== null
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  remove() {}

  next(): T {
    const item = this.current.item
    this.current = this.current.next
    return item
  }
}
