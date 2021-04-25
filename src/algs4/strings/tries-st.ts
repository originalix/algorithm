const R = 26
/**
 * 以字符串为键的符号表的 API
 */
interface StringST {
  put: (key: string, val: NodeVal) => void
  get: (key: string) => NodeVal
  // delete: (key: string) => void
  // contains: (key: string) => boolean
  // isEmpty: () => boolean
  // longestPrefixOf: (s: string) => string
  // keysWithPrefix: (s: string) => string
  // keysThatMatch: (s: string) => string
  // size: () => number
  // keys: () => string
}

type NodeVal = string | number
interface INode {
  val: NodeVal
  next: INode[]
}

class Node implements INode {
  public val: string | number
  public next: INode[]

  constructor() {
    this.val = null
    this.next = []
    for (let i = 0; i < R; i++) {
      this.next.push(null)
    }
  }
}

export default class TrieST implements StringST {
  private root: Node

  constructor() {
    this.root = new Node()
  }

  get(key: string): NodeVal {
    const x = this._get(this.root, key, 0)
    if (!x) return null
    return x.val
  }

  private _get(x: Node, key: string, d: number): Node {
    if (!x) return null
    if (d === key.length) return x
    const c = key.charCodeAt(d) - 97
    return this._get(x.next[c], key, d + 1)
  }

  put(key: string, val: NodeVal) {
    this._put(this.root, key, val, 0)
  }

  private _put(x: Node, key: string, val: NodeVal, d: number) {
    if (!x) x = new Node()
    if (d === key.length) {
      x.val = val
      return x
    }
    const c = key.charCodeAt(d) - 97
    x.next[c] = this._put(x.next[c], key, val, d + 1)
    return x
  }

  getRoot() {
    return this.root
  }
}

export { Node }
