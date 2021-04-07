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

/**
 * 查找接口
 */
export interface ISearch<K, V> extends ICommonFn {
  contains: (key: K) => boolean
  getKeys: () => K[]
  get: (key: K) => V | null
  put: (key: K, val: V) => void
  rank: (key: K, lo: number, hi: number) => number
}

/**
 * 二叉查找树 接口
 */
export interface IBst<K, V> extends ICommonFn {
  get: (key: K) => V | null
  put: (key: K, val: V) => void
  rank: (key: K) => number
  min: () => K
  max: () => K
  floor: (key: K) => K
  select: (key: number) => K
  deleteMin: () => void
  delete: (key: K) => void
  keys: (lo: K, hi: K) => K[]
}
