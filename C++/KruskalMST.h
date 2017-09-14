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
        
    }
};