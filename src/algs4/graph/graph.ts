import Bag from '@/algs4/1-3/bag'

interface IGraph {
  countV(): number
  countE(): number
  addEdge(v: number, w: number): void
  getAdj(v: number): Bag<number>
}

export default class Graph implements IGraph {
  private V: number // 顶点数目
  private E: number // 边的数目
  private adj: Bag<number>[] // 邻接表

  constructor(V: number)
  constructor(V: number, readIn: number[])
  constructor(V: never, readIn?: never[]) {
    this.V = V
    this.E = 0
    this.adj = [] // 创建邻接表
    for (let v = 0; v < V; v++) {
      // 将所有链表初始化为空
      this.adj[v] = new Bag<number>()
    }

    while (readIn && readIn.length) {
      const v = readIn.shift() // 读取一个顶点
      const w = readIn.shift() // 读取另一个顶点
      this.addEdge(v, w) // 添加一条连接它们的边
    }
  }

  countV() {
    return this.V
  }

  countE() {
    return this.E
  }

  addEdge(v: number, w: number) {
    this.adj[v].add(w) // 将 w 添加到 v 的链表中
    this.adj[w].add(v) // 将 v 添加到 w 的链表中number[]
    this.E++
  }

  getAdj(v: number): Bag<number> {
    return this.adj[v]
  }
}
