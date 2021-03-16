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

function main() {
  const pointArr = [0, 1, 0, 5, 0, 2, 2, 1, 2, 3, 3, 5, 3, 4, 2, 4]
  const G = createGraphFromReadIn(6, pointArr)
  const s = 0
  const search = new BreadthFirstPaths(G, s)
  for (let v = 0; v < G.countV(); v++) {
    const str = `${s} to ${v}: `
    const res = []
    if (search.hasPathTo(v)) {
      for (const x of search.pathTo(v)) {
        res.push(x)
      }
    }
    console.log(str + res.reverse().join('-'))
  }
}

main()
