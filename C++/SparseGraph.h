#include <iostream>
#include <cassert>
#include <vector>
#include "Edge.h"

using namespace std;

// 稀疏图 - 邻接表
template <typename Weight>
class SparseGraph {

private:
    int n, m; // 节点数和边数
    bool directed;  // 是否为有向图
    vector< vector< Edge<Weight> *> > g; // 图的具体数据

public:
    // 构造函数
    SparseGraph( int n, bool directed ) {
        this->n = n;
        this->m = 0;
        this->directed = directed;

        g = vector< vector<Edge<Weight> *> >(n, vector<Edge<Weight> *>());
    }

    ~SparseGraph() {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < g[i].size(); j++) {
                delete g[i][j];
            }
        }
    }

    int V() { return n; } // 返回节点的个数
    int E() { return m; } // 返回边的个数

    // 向图中添加一个边,权值为weight
    void addEdge( int v, int w, Weight weight ) {
        assert(v >= 0 && v < n);
        assert(w >= 0 && w < n);

        // 注意，由于在邻接表的情况，查找是否有重边需要遍历整个链表
        // 我们的程序允许重边的出现  
        g[v].push_back(new Edge<Weight>(v, w, weight));
        if ( v != w && !directed)
            g[w].push_back(new Edge<Weight>(w, v, weight));
        
        m++;
    }

    // 验证图中是否有从v到w的边
    bool hasEdge( int v, int w ) {
        assert(v >= 0 && v < n);
        assert(w >= 0 && w < n);

        for (int i = 0; i < g[v].size(); i++) {
            if (g[v][i]->other(v) == w)
                return true;
        }

        return false;
    }

    void show() {
        for (int i = 0; i < n; i++) {
            cout << "vertex " << i << ":\t";
            for (int j = 0; j < g[i].size(); j++)
                cout << "( to: " << g[i][j]->w() << ", wt: " <<g[i][j]->wt() << ")\t";
            cout << endl;
        }
    }

    // 邻边迭代器, 传入一个图和一个顶点,
    // 迭代在这个图中和这个顶点向连的所有边
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

        Edge<Weight>* begin() {
            index = 0;
            if ( G.g[v].size() )
                return G.g[v][index];
            return NULL;
        }

        Edge<Weight>* next() {
            index += 1;
            if ( index < G.g[v].size() )
                return G.g[v][index];
            return NULL;
        }

        bool end() {
            return index >= G.g[v].size();
        }
    };
};
