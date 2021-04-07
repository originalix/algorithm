// 链表节点 接口
export interface INodeItem<T> {
  item: T
  next: INodeItem<T>
}

// 链表 迭代接口
export interface INodeIterator<T> {
  hasNext: () => boolean
  remove: () => void
  next: () => T
}

export interface ICommonFn {
  isEmpty: () => boolean
  size: () => number
}

export interface IBag<T> extends ICommonFn {
  add: (item: T) => void
}

/**
 * 队列 接口
 */
export interface IQueue<T> extends ICommonFn {
  first: INodeItem<T>
  last: INodeItem<T>
  enqueue: (item: T) => void
  dequeue: () => T
}

export interface IStack<T> extends ICommonFn {
  push: (item: T) => void
  pop: () => T
}

/**
 * 排序 基础接口
 */
export interface ISort<T = number> {
  sort: (array?: T[]) => void
  less: (v: T, w: T) => boolean
  show: () => void
  isSorted: () => boolean
  main: (passArray?: boolean) => void
}
