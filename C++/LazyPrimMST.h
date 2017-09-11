#include <iostream>
#include <vector>
#include <cassert>
#include "Edge.h"
#include "MinHeap.h"

using namespace std;

template <typename Graph, typename Weight>
class LazyPrimMST {
private:
    Graph &G;                    // 图的引用
    MinHeap< Edge<Weight> > pq;  // 最小堆，算法辅助数据结构
    bool *marked;                // 标记数组，在算法运行过程中标记节点i是否被访问
    vector< Edge<Weight> > mst;  // 最小生成树所包含的所有边 
    Weight mstWeight;            // 最小生成树的权值

    void visit( int v ) {
        assert( !marked[v] );
        marked[v] = true;
        
        typename Graph::adjIterator adj(G, v);
        for (Edge<Weight>* e = adj.begin(); !adj.end(); e = adj.next()) {
            if ( !marked[e->other(v)] )
                pq.insert(*e);
        }
    }
};