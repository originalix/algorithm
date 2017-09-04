#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <cassert>

using namespace std;

template <typename Graph>
class ShortestPath {

private:
    Graph &G;
    int s;
    bool *visited;
    int *from;
    int *ord;

public:
    ShortestPath( Graph &graph, int s ): G(graph) {
        assert ( s >= 0 && s < graph.V() );
        visited = new bool[graph.V()];
        from = new int[graph.V()];
        ord = new int[graph.V()];

        for (int i = 0; i < graph.V(); i++) {
            visited[i] = false;
            from[i] = -1;
            ord[i] = -1;
        }

        this->s = s;

        queue<int> q;
        q.push(s);
        visited[s] = true;
        ord[s] = 0;
        while ( !q.empty() ) {
            int v = q.front();
            q.pop();

            typename Graph::adjIterator adj(G, v);
            for (int i = adj.begin(); !adj.end(); i = adj.next()) {
                if (!visited[i]) {
                    q.push(i);
                    visited[i] = true;
                    from[i] = v;
                    ord[i] = ord[v] + 1;
                }
            }
        }
    }
};