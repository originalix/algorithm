import Queue from '@/algs4/1-3/node-queue'
import Graph, { createGraphFromReadIn } from './graph'

export default class BreadthFirstPaths {
  private marked: boolean[]
  private edgeTo: number[]
  private s: number

  constructor(G: Graph, s: number) {
    this.marked = []
    this.edgeTo = []
    this.s = s
    this.bfs(G, s)
  }

  private bfs(G: Graph, s: number) {
    const queue = new Queue<number>()
    this.marked[s] = true
    queue.enqueue(s)
    while (!queue.isEmpty()) {
      const v = queue.dequeue()
      const adj = G.getAdj(v)
      while (adj.hasNext()) {
        const w = adj.next()
        if (!this.marked[w]) {
          this.edgeTo[w] = v
          this.marked[w] = true
          queue.enqueue(w)
        }
      }
    }
  }

  hasPathTo(v: number): boolean {
    return this.marked[v]
  }

  pathTo(v: number): number[] {
    if (!this.hasPathTo(v)) return null
    const path = []
    for (let x = v; x !== this.s; x = this.edgeTo[x]) {
      path.push(x)
    }
    path.push(this.s)
    return path
  }
}
