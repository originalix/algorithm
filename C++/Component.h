#include <iostream>
#include <cassert>

using namespace std;

template<typename Graph>
class Component {
private:
    Graph &G;
    bool* visited;
    int ccount;
    int* id;

    // 图的深度优先遍历
    void dfs( int v ) {
        visited[v] = true;
        id[v] = ccount;
        typename Graph::adjIterator adj(G, v);
        for (int i = adj.begin(); !adj.end(); i = adj.next()) {
            if (!visited[i])
                dfs(i);
        }
    }
    
public:
    Component(Graph &graph): G(graph) {

        // 算法初始化
        visited = new bool[G.V()];
        id = new int[G.V()];
        ccount = 0;
        for (int i = 0; i < G.V(); i++) {
            visited[i] = false;
            id[i] = -1;
        }

        // 求图的联通分量
        for (int i = 0; i < G.V(); i++) {
            if (!visited[i]) {
                dfs(i);
                ccount++;
            }
        }
    }

    ~Component() {
        delete[] visited;
        delete[] id;
    }
};