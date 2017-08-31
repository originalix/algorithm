#include <iostream>
#include <vector>
#include <stack>
#include <cassert>

using namespace std;

template<typename Graph>
class Path {

private:
    Graph &G;
    int s;
    bool* visited;
    int* from;

    // 图的深度优先遍历
    void dfs( int v ) {
        visited[v] = true;

        typename Graph::adjIterator adj(G, v);
        for (int i = adj.begin(); !adj.end(); i = adj.next()) {
            if (!visited[i]) {
                from[i] = v;
                dfs(i);
            }
        }
    } 
public:
    Path(Graph &graph, int s): G(graph) {
        assert( s >= 0 && s < G.V() );

        visited = new bool[G.V()];
        from = new int[G.V()];

        for (int i = 0; i < G.V(); i++) {
            visited[i] = false;
            from[i] = -1;
        }

        this->s = s;
        // 寻路算法
        dfs(s);
    }

    ~Path() {
        delete[] visited;
        delete[] from;
    }
};