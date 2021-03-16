import Bag from '../1-3/bag'
import Graph, { createGraphFromReadIn } from './graph'

/**
 * 联通分量
 */
export default class CC {
  private marked: boolean[]
  private id: number[]
  private count: number

  constructor(G: Graph) {
    this.marked = []
    this.id = []
    this.count = 0

    for (let s = 0; s < G.countV(); s++) {
      if (!this.marked[s]) {
        this.dfs(G, s)
        this.count++
      }
    }
  }

  dfs(G: Graph, v: number) {
    this.marked[v] = true
    this.id[v] = this.count

    const adj = G.getAdj(v)
    while (adj.hasNext()) {
      const w = adj.next()
      if (!this.marked[w]) {
        this.dfs(G, w)
      }
    }
  }

  connected(v: number, w: number) {
    return this.id[v] === this.id[w]
  }

  getCount() {
    return this.count
  }

  getId(v: number) {
    return this.id[v]
  }
}

function main() {
  const readInArr = [0, 5, 4, 3, 0, 1, 9, 12, 6, 4, 5, 4, 0, 2, 11, 12, 9, 10, 0, 6, 7, 8, 9, 11, 5, 3]
  const graph = createGraphFromReadIn(13, readInArr)
  const cc = new CC(graph)

  const M = cc.getCount()
  console.log(`${M} components`)

  const components: Bag<number>[] = []
  for (let i = 0; i < M; i++) {
    components[i] = new Bag<number>()
  }
  for (let v = 0; v < graph.countV(); v++) {
    components[cc.getId(v)].add(v)
  }
  for (let i = 0; i < M; i++) {
    const res = []
    while (components[i].hasNext()) {
      const v = components[i].next()
      res.push(v)
    }
    console.log(res.reverse().join('-'))
  }
}

main()
