import Queue from '@/algs4/1-3/node-queue'

const R = 26 // 基数 小型字母表
/**
 * 以字符串为键的符号表的 API
 */
interface StringST {
  /**
   * 向表中插入键值对 (如果值为 null 则删除键 key)
   */
  put: (key: string, val: NodeVal) => void

  /**
   * 键 key 所对应的值 (如果键不存在则返回 null)
   */
  get: (key: string) => NodeVal

  /**
   * 删除键 key (和它的值)
   */
  delete: (key: string) => void

  /**
   * 表中是否保存着 key 的值
   */
  contains: (key: string) => boolean

  /**
   * 符号表是否为空
   */
  isEmpty: () => boolean

  /**
   * s 的前缀中最长的键
   */
  longestPrefixOf: (s: string) => string

  /**
   * 所有以 s 为前缀的键
   */
  keysWithPrefix: (s: string) => Queue<string>

  /**
   * 所有和 s 匹配的键（其中 '.' 能匹配任意字符）
   */
  keysThatMatch: (s: string) => Queue<string>

  /**
   * 键值对的数量
   */
  size: () => number

  /**
   * 符号表中的所有键
   */
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
  private n: number

  constructor() {
    this.root = new Node()
    this.n = 0
  }

  contains(key: string) {
    return this.get(key) !== null
  }

  size() {
    return this.n
  }

  isEmpty() {
    return this.n === 0
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
      if (x.val === null) this.n++
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

  longestPrefixOf(s: string) {
    const length = this.search(this.root, s, 0, 0)
    return s.substring(0, length)
  }

  private search(x: Node, s: string, d: number, length: number): number {
    if (!x) return length
    if (x.val !== null) length = d
    if (d === s.length) return length
    const c = s.charCodeAt(d) - 97
    return this.search(x.next[c], s, d + 1, length)
  }

  delete(key: string) {
    this.root = this._delete(this.root, key, 0)
  }

  private _delete(x: Node, key: string, d: number): Node {
    if (!x) return null
    if (d === key.length) {
      if (x.val !== null) this.n--
      x.val = null
    } else {
      const c = key.charCodeAt(d) - 97
      x.next[c] = this._delete(x.next[c], key, d + 1)
    }

    if (x.val !== null) return x
    for (let c = 0; c < R; c++) {
      if (x.next[c] !== null) return x
    }
    return null
  }

  getRoot() {
    return this.root
  }
}

export { Node }
