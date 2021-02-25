export class Node<K, V> {
  public key: K
  public val: V
  public left: Node<K, V> // 指向树的链接
  public right: Node<K, V>
  public N: number // 以该节点为根的子树中的结点总数
  constructor(key: K, val: V, N: number) {
    this.key = key; this.val = val; this.N = N
  }
}

/**
 * 二叉查找树
 */
export default class BST<K, V> {
  private root: Node<K, V> // 二叉查找树根节点

  size(): number { return this._size(this.root) }

  private _size(x: Node<K, V>): number {
    if (x === null) return 0
    else return x.N
  }

  get(key: K) {
    return this._get(this.root, key)
  }

  // 在以 x 为根节点的子树中查找并返回 key 对应的值
  private _get(x: Node<K, V>, key: K): V {
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
    x.N = this._size(x.left) + this._size(x.right)

    return x
  }
}
