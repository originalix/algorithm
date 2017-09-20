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

    bool negativeCycle() {
        return hasNegativeCycle;
    }

    Weight shortestPathTo( int w ) {
        assert( w >= 0 && w < G.V() );
        assert( !hasNegativeCycle );
        assert( hasPathTo(w) );
        return distTo[w];
    }

    bool hasPathTo( int w ) {
        assert( w >= 0 && w < G.V() );
        return from[w] != NULL;
    }
};
