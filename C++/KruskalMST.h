#include <iostream>
#include <vector>
#include "MinHeap.h"
#include "UnionFind5.h"
#include "Edge.h"

using namespace std;

template <typename Graph, typename Weight>
class KruskalMST {
private:
    vector< Edge<Weight> > mst;
    Weight mstWeight;

public:
    KruskalMST(Graph &graph) {
        MinHeap< Edge<Weight> > pq(graph.E());
        for (int i = 0; i < graph.V(); i++) {
            typename Graph::adjIterator adj(graph, i);
            for (Edge<Weight> *e = adj.begin(); !adj.end(); e = adj.next()) {
                if (e->v() < e->w())
                    pq.insert(*e);
            }
        }

        UF5::UnionFind uf = UnionFind(graph.V());
        while( !pq.isEmpty() ) {
            Edge<Weight> e = pq.extractMin();
            if ( uf.isConnected(e.v(), e.w()) )
                continue;
            mst.push_back(e);
            uf.unionElements(e.v(), e.w());
        }

        mstWeight = mst[0].wt();
        for (int i = 0; i < mst.size(); i++) {
            mstWeight += mst[i].wt();
        }
    }
};