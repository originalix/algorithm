import { StdIn } from '@/utils'
import Bag from '@/algs4/1-3/bag'
import Graph from '@/algs4/graph/graph'
import DepthFirstPaths from '@/algs4/graph/dfs'
import BreadthFirstPaths from '@/algs4/graph/bfs'
import ConnectComponents from '@/algs4/graph/connect-components'
import SymbolGraph from '@/algs4/graph/symbol-graph'

describe('无向图', () => {
  let data: number[] | null
  beforeEach(async () => {
    const stream = await StdIn.readFile('tinyDG.txt')
    data = stream.reduce((prev, line) => [...prev, ...line.split(' ')], []).map((val: string) => +val)
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
    if (dfs.hasPathTo(searchV)) {
      // dfs 遍历 0 - 2 的路径
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

  test('图的连通分量', () => {
    const ccData = [0, 5, 4, 3, 0, 1, 9, 12, 6, 4, 5, 4, 0, 2, 11, 12, 9, 10, 0, 6, 7, 8, 9, 11, 5, 3]
    const G = Graph.createByReadIn(13, ccData)
    const cc = new ConnectComponents(G)

    const M = cc.getCount()
    expect(M).toBe(3) // 连通分量数量

    const components: Bag<number>[] = []
    for (let i = 0; i < M; i++) {
      components[i] = new Bag<number>()
    }
    for (let v = 0; v < G.countV(); v++) {
      components[cc.getId(v)].add(v)
    }
    const res = []
    for (let i = 0; i < M; i++) {
      const subRes = []
      while (components[i].hasNext()) {
        const v = components[i].next()
        subRes.push(v)
      }

      res.push(subRes.reverse())
    }
    expect(res).toStrictEqual([
      [0, 1, 2, 3, 4, 5, 6],
      [7, 8],
      [9, 10, 11, 12],
    ])
  })

  test('符号图', async () => {
    const symbolData = await StdIn.readFile('routes.txt')
    const sg = new SymbolGraph(symbolData, ' ')
    const G = sg.getG()
    const routeName = 'ORD'
    const adj = G.getAdj(sg.index(routeName))
    const res = []
    while (adj.hasNext()) {
      const w = adj.next()
      res.push(sg.name(w))
    }

    expect(res.reverse()).toStrictEqual(['DEN', 'HOU', 'DFW', 'PHX', 'JFK', 'ATL'])
  })
})
