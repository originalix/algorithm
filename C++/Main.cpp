#include <iostream>
#include "SparseGraph.h"
#include "DenseGraph.h"
#include "ReadGraph.h"
#include "Path.h"
#include "ShortestPath.h"

using namespace std;

int main() {
    cout << "Hello wsx" << endl;

    string filename = "testG2.txt";
    SparseGraph g = SparseGraph(7, false);
    ReadGraph<SparseGraph> readGraph(g, filename);
    g.show();
    cout << endl;

    // 比较使用深度优先遍历和广度优先遍历获得路径的不同
    // 广度优先遍历获得的是无权图的最短路径
    Path<SparseGraph> dfs(g, 0);
    cout << "DFS : " << endl;
    dfs.showPath(6);

    ShortestPath<SparseGraph> bfs(g, 0);
    cout << "BFS : ";
    bfs.showPath(6);
    
    return 0;
}
 