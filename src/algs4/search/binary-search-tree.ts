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
export default class BST<K, V> {
  private root: Node<K, V> // 二叉查找树根节点
  constructor() {
    this.root = null
  }

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
    x.N = this._size(x.left) + this._size(x.right) + 1

    return x
  }

  // 查找最小键
  min(): K {
    return this._min(this.root).key
  }

  private _min(x: Node<K, V>): Node<K, V> {
    if (x.left === null) return x
    return this._min(x.left)
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
}

function main() {
  const words = 'XDELSKDDAOEMCD'.split('')
  const bst = new BST<string, number>()
  words.forEach((v, i) => {
    // 插入
    bst.put(v, i)
  })
  // 获取
  const val = bst.get('D')
  console.log(`key: D 的值为${val}`)

  // 查找最小键
  const minKey = bst.min()
  console.log(`二叉树中，最小键为: ${minKey}`)

  // 排名为 k 的键，正好有 k 个小于它的键
  const selectIdx = 5
  const selectKey = bst.select(selectIdx)
  console.log(`选择排名为 ${selectIdx} 的键: ${selectKey}`)
  // rank() 是 select() 的逆方法，它会返回给定键的排名
  const rank = bst.rank(selectKey)
  console.log(`${selectKey} 键的排名是 ${rank}`)

  // 删除最小键
  bst.deleteMin()
  const nextMinKey = bst.min()
  console.log(`删除最小键后，此时的 min key 为 ${nextMinKey}`)

  // 删除操作
  bst.delete(nextMinKey)
  console.log(`再次删除最小键 ${nextMinKey} 后，此时的 min key 为 ${bst.min()}`)
}

main()
