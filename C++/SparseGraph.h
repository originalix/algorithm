#include <iostream>
#include <cassert>
#include <vector>

using namespace std;

// 稀疏图 - 邻接表
class SparseGraph {

private:
    int n, m; // 节点数和边数
    bool directed;  // 是否为有向图
    vector< vector<int> > g; // 图的具体数据

public:
    // 构造函数
    SparseGraph( int n, bool directed ) {
        this->n = n;
        this->m = 0;
        this->directed = directed;

        for (int i = 0; i < n; i++) {
            g.push_back( vector<int>() );
        }
    }

    ~SparseGraph() {

    }

    int V() { return n; } // 返回节点的个数
    int E() { return m; } // 返回边的个数

    // 向图中添加一个边
    void addEdge( int v, int w ) {
        assert(v >= 0 && v < n);
        assert(w >= 0 && w < n);

        g[v].push_back(w);
        if ( v != w && !directed)
            g[w].push_back(v);
        
        m++;
    }

    // 验证图中是否有从v到w的边
    bool hasEdge( int v, int w ) {
        assert(v >= 0 && v < n);
        assert(w >= 0 && w < n);

        for (int i = 0; i < g[v].size(); i++) {
            if (g[v][i] == w)
                return true;
        }

        return false;
    }

    class adjIterator {
    private:
        SparseGraph &G;
        int v;
        int index;
    
    public:
        adjIterator(SparseGraph &graph, int v): G(graph) {
            this->v = v;
            this->index = 0;
        }

        int begin() {
            index = 0;
            if ( G.g[v].size() )
                return G.g[v][index];
            return -1;
        }

        int next() {
            index++;
            if ( index < G.g[v].size() )
                return G.g[v][index];
            return -1;
        }

        int end() {
            return index >= G.g[v].size();
        }
    };
};
