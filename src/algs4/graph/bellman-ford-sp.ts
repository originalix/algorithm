import type { ISP } from '@/types'
import Stack from '@/algs4/1-3/node-stack'
import Queue from '@/algs4/1-3/node-queue'
import DirectedEdge from '@/algs4/graph/directed-edge'
import EdgeWeightedDigraph from '@/algs4/graph/edge-weighted-digraph'
import EdgeWeightedDirectedCycle from '@/algs4/graph/edge-weighted-directed-cycle'

export default class BellmanFordSP implements ISP {
  private distTo: number[] // 从起点到某个顶点的路径长度
  private edgeTo: DirectedEdge[] // 从起点到某个顶点的最后一条边
  private onQ: boolean[] // 该顶点是否存在于队列中
  private queue: Queue<number> // 正在被放松的顶点
  private cost: number // relax 的调用次数
  private cycle: Stack<DirectedEdge> | undefined // edgeTo[] 中是否有负权重环

  constructor(G: EdgeWeightedDigraph, s: number) {
    this.distTo = []
    this.edgeTo = []
    this.onQ = []
    this.queue = new Queue()

    for (let v = 0; v < G.countV(); v++) {
      this.distTo[v] = Number.POSITIVE_INFINITY
    }
    this.distTo[s] = 0.0
    this.queue.enqueue(s)
    this.onQ[s] = true

    while (!this.queue.isEmpty() && !this.hasNegativeCycle()) {
      const v = this.queue.dequeue()
      this.onQ[v] = false
      this.relax(G, v)
    }
  }

  private relax(G: EdgeWeightedDigraph, v: number) {
    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const e = adj.next()
      const w = e.to()
      if (this.distTo[w] > this.distTo[v] + e.getWeight()) {
        this.distTo[w] = this.distTo[v] + e.getWeight()
        this.edgeTo[w] = e
        if (!this.onQ[w]) {
          this.queue.enqueue(w)
          this.onQ[w] = true
        }
      }

      if (this.cost++ % G.countV() === 0) {
        this.findNegativeCycle()
        if (this.hasNegativeCycle()) return
      }
    }
  }

  private findNegativeCycle(): void {
    const V = this.edgeTo.length
    const spt = new EdgeWeightedDigraph(V)
    for (let v = 0; v < V; v++) {
      if (this.edgeTo[v]) {
        spt.addEdge(this.edgeTo[v])
      }
    }

    const finder = new EdgeWeightedDirectedCycle(spt)
    this.cycle = finder.getCycle()
  }

  hasNegativeCycle(): boolean {
    return this.cycle !== undefined && this.cycle !== null
  }

  getDistTo(v: number) {
    if (this.hasNegativeCycle()) {
      throw new Error('存在负权重环')
    }
    return this.distTo[v]
  }

  hasPathTo(v: number) {
    return this.distTo[v] < Number.POSITIVE_INFINITY
  }

  pathTo(v: number) {
    if (this.hasNegativeCycle()) {
      throw new Error('存在负权重环')
    }
    if (!this.hasPathTo(v)) return null
    const path: DirectedEdge[] = []
    for (let e = this.edgeTo[v]; e !== undefined; e = this.edgeTo[e.from()]) {
      path.push(e)
    }
    return path
  }
}
