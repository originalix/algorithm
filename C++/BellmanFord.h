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

    void shortestPath( int w, vector< Edge<Weight> > &vec ) {
        assert( w >= 0 && w < G.V() );
        assert( !hasNegativeCycle );
        assert( hasPathTo(w) );

        stack<Edge<Weight>*> s;
        Edge<Weight> *e = from[w];
        while( e->v() != this->s ) {
            s.push(e);
            e = from[e->v()];
        }
        s.push(e);

        while( !s.empty() ) {
            e = s.top();
            vec.push_back(e);
            s.pop();
        }
    }

    void showPath( int w ) {
        assert( w >= 0 && w < G.V() );
        assert( !hasNegativeCycle );
        assert( hasPathTo(w) );

        vector< Edge<Weight> > vec;
        shortestPath( w, vec );
        for (int i = 0; i < vec.size(); i++) {
            cout << vec[i].v() << " -> ";
            if ( i == vec.size() - 1 )
                cout << vec[i].w() << endl;
        }
    }
};
