import { cloneDeep } from 'lodash'
import Edge from './edge'
import UF from '../1-5/union-find'
import MinPQ from '../sort/min-pq'
import Queue from '../1-3/node-queue'
import EdgeWeightedGraph from './edge-weighted-graph'

/**
 * 最小生成树的 Kruskal 算法
 */
export default class KruskalMST {
  private mst: Queue<Edge>

  constructor(G: EdgeWeightedGraph) {
    this.mst = new Queue()
    const pq = new MinPQ<Edge>()
    const edges = G.edges()
    while (edges.hasNext()) {
      pq.insert(edges.next())
    }
    const uf = new UF(G.getV())

    while (!pq.isEmpty() && this.mst.size() < G.getV() - 1) {
      const e = pq.delMin()
      const v = e.either()
      const w = e.other(v)
      if (uf.connected(v, w)) continue
      uf.union(v, w)
      this.mst.enqueue(e)
    }
  }

  edges() {
    return this.mst
  }

  weight(): number {
    let weight = 0.0
    const edges = cloneDeep(this.edges())
    while (!edges.isEmpty()) {
      const e = edges.dequeue()
      weight += e.getWeight()
    }
    return +weight.toFixed(2)
  }
}
