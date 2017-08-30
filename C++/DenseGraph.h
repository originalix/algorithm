#include <iostream>
#include <cassert>
#include <vector>

using namespace std;

// 稠密图 — 邻接矩阵
class DenseGraph {
private:
    int n, m;  // 节点数和边数
    bool directed; // 是否为有向图
    vector< vector<bool> > g;  // 图的具体数据

public:
    // 构造函数
    DenseGraph( int n, bool directed ) {
        this->n = n;
        this->m = 0; // 初始化没有任何边
        this->directed = directed;

        for (int i = 0; i < n; i++) {
            // g初始化为n*n的布尔矩阵，每一个g[i][j]均为false,表示没有任何边
            g.push_back( vector<bool>(n, false) );
        }
    }

    ~DenseGraph() {

    }

    int V() { return n; } // 返回节点个数
    int E() { return m; } // 返回边的个数

    // 向图中添加一个边
    void addEdge( int v, int w ) {
        assert( v >= 0 && v < n);
        assert( w >= 0 && w < n);

        if ( hasEdge(v, w) )
            return;
        
        g[v][w] = true;
        if (!directed)
            g[w][v] = true;
        m++;
    }

    // 验证图中是否有从v到w的边
    bool hasEdge( int v, int w ) {
        assert( v >= 0 && v < n );
        assert( w >= 0 && w < n );

        return g[v][w];
    }
};
