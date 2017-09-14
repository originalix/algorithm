#include <iostream>
#include <vector>
#include <cassert>
#include "Edge.h"
#include "IndexMinHeap.h"

using namespace std;

template <typename Graph, typename Weight>
class PrimMST {
private:
    Graph &G;
    IndexMinHeap<Weight> ipq;
    vector< Edge<Weight>* > edgeTo;
    bool* marked;
    vector< Edge<Weight> > mst;
    Weight mstWeight;

    // 访问节点v
    void visit( int v ) {
        assert( !marked[v] );
        marked[v] = true;

        typename Graph::adjIterator adj(G, v);
        for (Edge<Weight>* e = adj.begin(); !adj.end(); e = adj.next()) {
            int w = e->other(v);
            if ( !marked[w] ) {
                if ( !edgeTo[w] ) {
                    edgeTo[w] = e;
                    ipq.insert(w, e->wt());
                }
                else if ( e->wt() < edgeTo[w]->wt() ) {
                    edgeTo[w] = e;
                    ipq.change(w, e->wt());
                }
            }
        }
    }
};
