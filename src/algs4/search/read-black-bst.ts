const RED: boolean = true
const BLACK: boolean = false

export class Node<K, V> {
  public key: K
  public val: V
  public left: Node<K, V>
  public right: Node<K, V>
  public N: number
  public color: boolean
  constructor(key: K, val: V, N: number, color: boolean) {
    this.key = key
    this.val = val
    this.N = N
    this.color = color
  }
}

/**
 * 红黑树
 */
export default class RedBlackBST<K, V> {
  private root: Node<K, V>
  constructor() {
    this.root = null
  }

  size(): number { return this._size(this.root) }

  private _size(h: Node<K, V>): number {
    if (h === null) return 0
    return h.N
  }

  isRed(h: Node<K, V>):boolean {
    if (h === null) return false
    return h.color === RED
  }

  rotateLeft(h: Node<K, V>): Node<K, V> {
    const x = h.right
    h.right = x.left
    x.left = h
    x.color = h.color
    h.color = RED
    x.N = h.N
    h.N = 1 + this._size(h.left) + this._size(h.right)
    return x
  }

  rotateRight(h: Node<K, V>): Node<K, V> {
    const x = h.left
    h.left = x.right
    x.right = h
    x.color = h.color
    h.color = RED
    x.N = h.N
    h.N = 1 + this._size(h.left) + this._size(h.right)
    return x
  }

  flipColors(h: Node<K, V>) {
    h.color = RED
    h.left.color = BLACK
    h.right.color = BLACK
  }

  // 查找 key，找到则更新其值，否则为它新建一个结点
  put(key: K, val: V) {
    this.root = this._put(this.root, key, val)
    this.root.color = BLACK
  }

  private _put(h: Node<K, V>, key: K, val: V) {
    // 标准的插入操作，和父结点用红链接相连
    if (h === null) return new Node<K, V>(key, val, 1, RED)

    if (key < h.key) h.left = this._put(h.left, key, val)
    else if (key > h.key) h.right = this._put(h.right, key, val)
    else h.val = val

    if (this.isRed(h.right) && !this.isRed(h.left)) h = this.rotateLeft(h)
    if (this.isRed(h.left) && this.isRed(h.left.left)) h = this.rotateRight(h)
    if (this.isRed(h.left) && this.isRed(h.right)) this.flipColors(h)

    h.N = this._size(h.left) + this._size(h.right) + 1
    return h
  }
}
