import Queue from '@/algs4/1-3/node-queue'

const R = 26 // 基数 小型字母表
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
  keysWithPrefix: (s: string) => Queue<string>
  keysThatMatch: (s: string) => Queue<string>
  // size: () => number
  keys: () => Queue<string>
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

/**
 * 基于单词查找树的符号表
 */
export default class TrieST implements StringST {
  private root: Node // 单词查找树 根节点

  constructor() {
    this.root = new Node()
  }

  get(key: string): NodeVal {
    const x = this._get(this.root, key, 0)
    if (!x) return null
    return x.val
  }

  // 返回以 x 作为根节点的紫丹慈查找树中与 key 相关联的值
  private _get(x: Node, key: string, d: number): Node {
    if (!x) return null
    if (d === key.length) return x
    const c = key.charCodeAt(d) - 97 // 找到第 d 个字符所对应的子单词查找树
    return this._get(x.next[c], key, d + 1)
  }

  put(key: string, val: NodeVal) {
    this._put(this.root, key, val, 0)
  }

  // 如果 key 存在于以 x 为根节点的子单词查找树中则更新与它相关联的值
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

  keys() {
    return this.keysWithPrefix('')
  }

  keysWithPrefix(pre: string) {
    const q = new Queue<string>()
    this.collect(this._get(this.root, pre, 0), pre, q)
    return q
  }

  private collect(x: Node, pre: string, q: Queue<string>) {
    if (!x) return
    if (x.val !== null) q.enqueue(pre)
    for (let i = 0; i < R; i++) {
      const c = String.fromCodePoint(i + 97)
      this.collect(x.next[i], pre + c, q)
    }
  }

  keysThatMatch(pat: string) {
    const q = new Queue<string>()
    this.matchCollect(this.root, '', pat, q)
    return q
  }

  private matchCollect(x: Node, pre: string, pat: string, q: Queue<string>) {
    const d = pre.length
    if (!x) return
    if (d === pat.length && x.val !== null) q.enqueue(pre)
    if (d === pat.length) return

    const next = pat.charAt(d)
    for (let i = 0; i < R; i++) {
      const c = String.fromCodePoint(i + 97)
      if (next === '.' || next === c) {
        this.matchCollect(x.next[i], pre + c, pat, q)
      }
    }
  }

  getRoot() {
    return this.root
  }
}

export { Node }
