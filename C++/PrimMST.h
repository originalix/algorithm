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
};