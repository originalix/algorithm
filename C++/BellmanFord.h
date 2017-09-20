#include <iostream>
#include <stack>
#include <vector>
#include "Edge.h"

using namespace std;

template<typename Graph, typename Weight>
class BellmanFord {
private:
    Graph &G;
    int s;
    Weight* distTo;
    vector<Edge<Weight>*> from;

    bool hasNegativeCycle;

public:
    BellmanFord(Graph &graph, int s):G(graph) {

    }

    ~BellmanFord() {
        delete[] distTo;
        delete from[s];
    }

};
