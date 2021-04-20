import type { ISP } from '@/types'
import Queue from '@/algs4/1-3/node-queue'
import DirectedEdge from '@/algs4/graph/directed-edge'
import EdgeWeightedDigraph from '@/algs4/graph/edge-weighted-digraph'

export default class BellmanFordSP implements ISP {
  private distTo: number[]
  private edgeTo: DirectedEdge[]
  private onQ: boolean[]
  private queue: Queue<number>
  private cost: number
  private cycle: DirectedEdge

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
      }
    }
  }

  // TODO: 寻找负权重环
  private findNegativeCycle(): void {}
  // TODO: 存在负权重环
  hasNegativeCycle(): boolean {}
}
