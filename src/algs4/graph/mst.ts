import { StdIn } from '@/utils'
import { cloneDeep } from 'lodash'
import Edge from './edge'
import Queue from '../1-3/node-queue'
import IndexMinPQ from '../sort/index-min-pq'
import EdgeWeightedGraph from './edge-weighted-graph'

/**
 * 最小生成树的 Prim 算法 (即时版本)
 */
export default class PrimMST {
  private edgeTo: Edge[] // 距离树最近的边
  private distTo: number[] // distTo[w] = edgeTo[w].weight()
  private marked: boolean[] // 如果v在树中则为 true
  private pq: IndexMinPQ<number> // 有效的横切边

  constructor(G: EdgeWeightedGraph) {
    this.edgeTo = []
    this.distTo = []
    this.marked = []
    this.pq = new IndexMinPQ()

    for (let v = 0; v < G.getV(); v++) {
      this.distTo[v] = Number.POSITIVE_INFINITY
    }

    this.distTo[0] = 0.0
    this.pq.insert(0, 0.0)
    while (!this.pq.isEmpty()) { // 用顶点 0 和权重 0 初始化 pq
      this.visit(G, this.pq.delMin()) // 将最近的顶点添加到树中
    }
  }

  private visit(G: EdgeWeightedGraph, v: number) {
    // 将顶点 v 添加到树中，更新数据
    this.marked[v] = true
    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const e = adj.next()
      const w = e.other(v)
      if (this.marked[w]) continue // v-w 失效
      if (e.getWeight() < this.distTo[w]) {
        // 连接 w 和树的最佳边 Edge 变为e
        this.edgeTo[w] = e
        this.distTo[w] = e.getWeight()
        if (this.pq.contains(w)) this.pq.change(w, this.distTo[w])
        else this.pq.insert(w, this.distTo[w])
      }
    }
  }

  getEdges() {
    const mst = new Queue<Edge>()
    for (let v = 0; v < this.edgeTo.length; v++) {
      const e = this.edgeTo[v]
      if (e !== null && e !== undefined) {
        mst.enqueue(e)
      }
    }
    return mst
  }

  getWeight() {
    let weight = 0.0
    const edges = cloneDeep(this.getEdges())
    while (!edges.isEmpty()) {
      const e = edges.dequeue()
      weight += e.getWeight()
    }
    return weight.toFixed(2)
  }
}

async function main() {
  const stream = await StdIn.readFile('tinyEDG.txt')
  const data = stream.reduce((prev, line) => ([...prev, ...line.split(' ')]), []).map((val: string) => +val)

  const G = new EdgeWeightedGraph(8, data)
  const mst = new PrimMST(G)
  const edges = mst.getEdges()
  while (!edges.isEmpty()) {
    console.log(edges.dequeue())
  }
  console.log(mst.getWeight())
}

main()
