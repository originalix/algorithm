# 算法（第4版）TypeScript 版本

---

本仓库包含了 TypeScript 描述的算法与数据结构。

是我在阅读经典算法书籍《算法（第4版）》时完成的，记录自己的算法学习过程。

## 使用方式

Install:

```bash
yarn
npm install
```

Compile:

```bash
yarn start
npm start
```

Test:
> 执行上述每个算法的单元测试用例

```bash
yarn test
npm run test
```

## 队列、链表、栈

* [Dijkstra 的双栈算术表达式求值算法](src/algs4/1-3/evaluate.ts)
* [队列(链表实现)](src/algs4/1-3/node-queue.ts)
* [栈(链表实现)](src/algs4/1-3/node-stack.ts)
* [动态调整大小的栈](src/algs4/1-3/resizing-array-stack.ts)

## 并查集

* [并查集](src/algs4/1-5/union-find.ts)
* [并查集(树型森林的表示)](src/algs4/1-5/quick-union.ts)
* [并查集(加权算法)](src/algs4/1-5/weight-quick-union.ts)

## 排序

* [插入排序](src/algs4/sort/insertion.ts)
* [选择排序](src/algs4/sort/selection.ts)
* [希尔排序](src/algs4/sort/shell-sort.ts)
* [归并排序](src/algs4/sort/merge-sort.ts)
* [快速排序](src/algs4/sort/quick-sort.ts)
* [三指针快排](src/algs4/sort/quick3way.ts)
* [优先队列(堆)](src/algs4/sort/max-pq.ts)
* [堆排序](src/algs4/sort/heap-sort.ts)

## 查找

* [符号表 顺序查找(基于无序链表)](src/algs4/search/sequential-search-st.ts)
* [符号表 二分查找(基于有序数组)](src/algs4/search/binary-search-st.ts)
* [二叉查找树](src/algs4/search/binary-search-tree.ts)
* [红黑树](src/algs4/search/red-black-bst.ts)

## 图

* [无向图(邻接表表示)](src/algs4/graph/graph.ts)
* [DFS 深度优先搜索](src/algs4/graph/dfs.ts)
* [BFS 广度优先搜索](src/algs4/graph/bfs.ts)
* [连通分量](src/algs4/graph/connect-components.ts)
* [符号图](src/algs4/graph/symbol-graph.ts)
* [有向图](src/algs4/graph/digraph.ts)
* [有向图的可达性](src/algs4/graph/directed-dfs.ts)
* [有向图中深度优先搜索的顶点排序](src/algs4/graph/depth-first-order.ts)
* [拓补排序](src/algs4/graph/topological.ts)
* [有向图的强连通分量](src/algs4/graph/kosaraju.ts)
* [最小生成树的 Prim 算法](src/algs4/graph/prim-mst.ts)
* [最小生成树的 Kruskal 算法](src/algs4/graph/kruskal-mst.ts)
* [最短路径 Dijkstra 算法](src/algs4/graph/dijkstra-sp.ts)
* [无环加权有向图的最短路径算法](src/algs4/graph/acyclic-sp.ts)

## 字符串

* [LSD(低位优先的字符串排序)](src/algs4/strings/LSD.ts)
* [基于单词查找树的符号表](src/algs4/strings/tries-st.ts)
