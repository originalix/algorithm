import { cloneDeep } from 'lodash'
import Queue from '../1-3/node-queue'
import MinPQ from '../sort/min-pq'
import Edge from './edge'
import EdgeWeightedGraph from './edge-weighted-graph'

/**
 *
 * 最小生成树 Prim 算法的延时实现
 *
 */
export default class LazyPrimMST {
  private marked: boolean[] // 最小生成树的顶点
  private mst: Queue<Edge> // 最小生成树的边
  private pq: MinPQ<Edge> // 横切边(包括失效的边)

  constructor(G: EdgeWeightedGraph) {
    this.pq = new MinPQ()
    this.marked = []
    this.mst = new Queue()

    this.visit(G, 0) // 假设 G 是连通的
    while (!this.pq.isEmpty()) {
      const e = this.pq.delMin() // 从 pq 中得到权重最小的边

      const v = e.either()
      const w = e.other(v)
      if (this.marked[v] && this.marked[w]) continue // 跳过失效的边
      this.mst.enqueue(e) // 将边添加到树中
      if (!this.marked[v]) this.visit(G, v) // 将顶点 v 或 w 添加到树中
      if (!this.marked[w]) this.visit(G, w)
    }
  }

  private visit(G: EdgeWeightedGraph, v: number) {
    // 标记顶点 v 并将所有连接 v 和未被标记顶点的边加入 pq
    this.marked[v] = true
    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const e = adj.next()
      if (!this.marked[e.other(v)]) this.pq.insert(e)
    }
  }

  getEdges() {
    return this.mst
  }

  getWeight() {
    let weight = 0.0
    const edges = cloneDeep(this.getEdges())
    while (!edges.isEmpty()) {
      weight += edges.dequeue().getWeight()
    }
    return weight
  }
}
