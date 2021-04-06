import { StdIn } from '../../src/utils'
import Graph from '../../src/algs4/graph/graph'
import DepthFirstPaths from '../../src/algs4/graph/dfs'
import BreadthFirstPaths from '../../src/algs4/graph/bfs'

describe('无向图', () => {
  let data: number[] | null
  beforeEach(async () => {
    const stream = await StdIn.readFile('tinyDG.txt')
    data = stream.reduce((prev, line) => ([...prev, ...line.split(' ')]), []).map((val: string) => +val)
  })

  test('无向图数据结构', () => {
    const graph = Graph.createByReadIn(13, data)
    expect(graph.countE()).toBe(15)
    expect(graph.countV()).toBe(13)

    // 测试顶点为 0 的所有边
    const adj = graph.getAdj(0)
    const res = []
    while (adj.hasNext()) {
      const w = adj.next()
      res.push(w)
    }
    expect(res).toStrictEqual([5, 2, 1, 6])
  })

  test('DFS 深度优先遍历', () => {
    const G = Graph.createByReadIn(13, data)
    const s = 0
    const dfs = new DepthFirstPaths(G, s)
    const searchV = 2
    const res = []
    if (dfs.hasPathTo(searchV)) { // dfs 遍历 0 - 2 的路径
      for (const x of dfs.pathTo(searchV)) {
        res.push(x)
      }
    }
    expect(res.reverse()).toStrictEqual([0, 5, 3, 2])
  })

  test('BFS 广度优先遍历', () => {
    const G = Graph.createByReadIn(13, data)
    const s = 0
    const bfs = new BreadthFirstPaths(G, s)
    const searchV = 10
    const res = []
    if (bfs.hasPathTo(searchV)) {
      for (const x of bfs.pathTo(searchV)) {
        res.push(x)
      }
    }
    expect(res.reverse()).toStrictEqual([0, 6, 9, 10])
  })
})
