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
};