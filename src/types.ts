import DirectedEdge from '@/algs4/graph/directed-edge'
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

/**
 * 加权有向边的API
 */
export interface IDirectedEdge {
  getWeight: () => number
  from: () => number
  to: () => number
  toString: () => string
}

/**
 * 加权有向图的API
 */
export interface IEdgeWeightedDigraph {
  countV: () => number
  countE: () => number
  addEdge: (e: DirectedEdge) => void
  getAdj: (v: number) => void
  edges: () => void
}

/**
 * 最短路径的API
 */
export interface ISP {
  getDistTo: (v: number) => number
  hasPathTo: (v: number) => boolean
  pathTo: (v: number) => void
}
