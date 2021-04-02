import { __DEBUG__ } from '@/constants'

// 链表结点的定义
export class Node<Key, Value> {
  public key: Key
  public val: Value
  public next: Node<Key, Value>
  constructor(key: Key, val: Value, next: Node<Key, Value>) {
    this.key = key
    this.val = val
    this.next = next
  }
}

/**
 * 顺序查找（基于无序链表）
 */
class SequentialSearchST<Key, Value> {
  private first: Node<Key, Value> // 链表首结点
  private N: number

  constructor() {
    this.first = null
    this.N = 0
  }

  size(): number { return this.N }

  keys(): Key[] {
    const keys = []
    while (this.first !== null) {
      keys.push(this.first.key)
      this.first = this.first.next
    }
    return keys
  }

  // 查找给定的键，返回相关联的值
  get(key: Key): Value {
    for (let x = this.first; x !== null; x = x.next) {
      if (key === x.key) return x.val
    }
    return null
  }

  // 查找给定的键，找到则更新其值，否则在表中新建节点
  put(key: Key, val: Value) {
    for (let x = this.first; x !== null; x = x.next) {
      if (key === x.key) {
        x.val = val
        return
      }
    }
    this.first = new Node<Key, Value>(key, val, this.first)
    this.N++
  }

  delete(key: Key) {
    if (key === null) throw new Error('argument to delete() is null')
    return this._delete(this.first, key)
  }

  private _delete(node: Node<Key, Value>, key: Key) {
    if (node === null) return null
    if (key === node.key) {
      this.N--
      return node.next
    }
    node.next = this._delete(node.next, key)
    return node
  }
}

function main() {
  const words = 'helloworld'.split('')
  const st = new SequentialSearchST<string, number>()
  words.forEach((v, i) => {
    st.put(v, i + 1)
  })
  st.delete('o')
  const keys = st.keys()
  console.log(keys)
}

__DEBUG__ && main()
