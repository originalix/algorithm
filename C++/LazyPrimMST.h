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

public:
    LazyPrimMST(Graph &graph):G(graph), pq(MinHeap< Edge<Weight> >(graph.E())) {
        marked = new bool[G.V()];
        for (int i = 0; i < G.V(); i++) {
            marked[i] = false;
        }
        mst.clear();

        visit(0);

        while( !pq.isEmpty() ) {
            Edge<Weight> e = pq.extractMin();
            if ( marked[e.v()] == marked[e.w()] )
                continue;
            mst.push_back( e );

            if ( !marked[e.v()] )
                visit( e.v() );
            else
                visit( e.w() );
        }

        mstWeight = mst[0].wt();
        for (int i = 1; i < mst.size(); i++) {
            mstWeight += mst[i].wt();
        }
    }
};