import { IBst } from '@/types'
export class Node<K, V> {
  public key: K
  public val: V
  public left: Node<K, V> // 指向树的链接
  public right: Node<K, V>
  public N: number // 以该节点为根的子树中的结点总数
  constructor(key: K, val: V, N: number) {
    this.key = key
    this.val = val
    this.N = N
    this.left = null
    this.right = null
  }
}

/**
 * 二叉查找树
 */
export default class BST<K, V> implements IBst<K, V> {
  private root: Node<K, V> // 二叉查找树根节点
  constructor() {
    this.root = null
  }

  size(): number {
    return this._size(this.root)
  }

  private _size(x: Node<K, V>): number {
    if (x === null) return 0
    else return x.N
  }

  isEmpty() {
    return this.size() === 0
  }

  get(key: K) {
    return this._get(this.root, key)
  }

  // 在以 x 为根节点的子树中查找并返回 key 对应的值
  private _get(x: Node<K, V>, key: K): V | null {
    // 如果找不到则返回 null
    if (x === null) return null
    if (key < x.key) {
      return this._get(x.left, key)
    } else if (key > x.key) {
      return this._get(x.right, key)
    } else {
      return x.val
    }
  }

  // 查找 key， 找到则更新它的值，否则为它创建一个新的节点
  put(key: K, val: V) {
    this.root = this._put(this.root, key, val)
  }

  // 如果 key 存在于以 x 为根节点的子树中则更新它的值
  // 否则将以 key 和 val 为键值对的新节点插入到该子树中
  private _put(x: Node<K, V>, key: K, val: V): Node<K, V> {
    if (x === null) return new Node(key, val, 1)
    if (key < x.key) {
      x.left = this._put(x.left, key, val)
    } else if (key > x.key) {
      x.right = this._put(x.right, key, val)
    } else {
      x.val = val
    }
    x.N = this._size(x.left) + this._size(x.right) + 1

    return x
  }

  // 查找最小键
  min(): K {
    return this._min(this.root)?.key
  }

  private _min(x: Node<K, V>): Node<K, V> {
    if (x.left === null) return x
    return this._min(x.left)
  }

  max(): K {
    return this._max(this.root)?.key
  }

  private _max(x: Node<K, V>): Node<K, V> {
    if (x.right === null) return x
    return this._max(x.right)
  }

  // 向上取整
  floor(key: K) {
    const x = this._floor(this.root, key)
    if (x === null) return null
    return x.key
  }

  private _floor(x: Node<K, V>, key: K): Node<K, V> {
    if (x === null) return null
    if (key === x.key) return x
    if (key < x.key) return this._floor(x.left, key)
    const t = this._floor(x.right, key)
    return t !== null ? t : x
  }

  //  选择操作
  select(k: number) {
    return this._select(this.root, k)?.key
  }

  // 返回排名为 k 的节点
  private _select(x: Node<K, V>, k: number): Node<K, V> {
    if (x === null) return null
    const t = this._size(x.left)
    if (t > k) return this._select(x.left, k)
    else if (t < k) return this._select(x.right, k - t - 1)
    else return x
  }

  // 排名
  rank(key: K): number {
    return this._rank(key, this.root)
  }

  // 返回以 x 为根节点的子树中小于 x.key 的数量
  private _rank(key: K, x: Node<K, V>): number {
    if (x === null) return 0
    if (key < x.key) {
      return this._rank(key, x.left)
    } else if (key > x.key) {
      return 1 + this._size(x.left) + this._rank(key, x.right)
    } else {
      return this._size(x.left)
    }
  }

  // 删除最小键
  deleteMin() {
    this.root = this._deleteMin(this.root)
  }

  private _deleteMin(x: Node<K, V>): Node<K, V> {
    if (x.left === null) return x.right
    x.left = this._deleteMin(x.left)
    x.N = this._size(x.left) + this._size(x.right) + 1
    return x
  }

  // 删除操作
  delete(key: K) {
    this.root = this._delete(this.root, key)
  }

  /**
   * 删除算法步骤
   * 1、将指向即将被删除的节点的链接保存为 t
   * 2、将 x 指向它的后继节点 min(t.right)
   * 3、将 x 的右链接(原本指向一颗所有节点都大于x.key的二叉查找树)指向 deleteMin(t.right)，也就是在删除后所有结点仍然都大于 x.key 的子二叉查找树
   * 4、将 x 的左连接(本为空)设为t.left(其下所有的键都小于被删除的结点和它的后继结点)
   */
  private _delete(x: Node<K, V>, key: K): Node<K, V> {
    if (x === null) return null
    if (key < x.key) {
      x.left = this._delete(x.left, key)
    } else if (key > x.key) {
      x.right = this._delete(x.right, key)
    } else {
      if (x.right === null) return x.left
      if (x.left === null) return x.right
      const t = x
      x = this._min(t.right)
      x.right = this._deleteMin(t.right)
      x.left = t.left
    }
    x.N = this._size(x.left) + this._size(x.right) + 1
    return x
  }

  // 范围查找
  keys(lo: K, hi: K) {
    const queue: K[] = []
    this._keys(this.root, queue, lo, hi)
    return queue
  }

  // 中序遍历
  private _keys(x: Node<K, V>, queue: K[], lo: K, hi: K) {
    if (x === null) return
    if (lo < x.key) this._keys(x.left, queue, lo, hi)
    if (lo <= x.key && hi >= x.key) queue.push(x.key)
    if (hi > x.key) this._keys(x.right, queue, lo, hi)
  }
}
