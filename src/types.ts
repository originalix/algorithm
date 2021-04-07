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
