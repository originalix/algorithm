package PlayWithAlgorithms;

import java.util.Vector;

/**
 * Created by Lix on 2017/9/17.
 */
public class SparseWeightedGraph {
    private int n; // 节点数
    private int m; // 边数
    private boolean directed; // 是否为有向图
    private Vector<Integer>[] g; // 图的具体数据

    // 构建函数
    public SparseGraph(int n, boolean directed) {
        assert n >= 0;
        this.n = n;
        this.m = 0; // 初始化没有任何边
        this.directed = directed;
        // g初始化为n个空的vector,表示每一个g[i]都为空，即没有任何边
        g = (Vector<Integer>[])new Vector[n];
        for (int i = 0; i < n; i++) {
            g[i] = new Vector<Integer>();
        }
    }

    public int V() { return n; } // 返回节点个数
    public int E() { return m; } // 返回边的个数

    // 向图中添加一个边
    public void addEdge(int v, int w) {
        assert v >= 0 && v < n;
        assert w >= 0 && w < n;
        g[v].add(w);
        if (v != w && !directed) {
            g[w].add(v);
        }

        m++;
    }

    // 验证图中是否有从v到w的边
    public boolean hasEdge(int v, int w) {
        assert v >= 0 && v < n;
        assert w >= 0 && w < n;

        for (int i = 0; i < g[v].size(); i++) {
            if (g[v].elementAt(i) == w) {
                return true;
            }
        }

        return false;
    }

    // 显示图的信息
    @Override
    public void show() {
        for (int i = 0; i < n; i++) {
            System.out.print("vertex " + i + ":\t");
            for (int j = 0; j < g[i].size(); j++) {
                System.out.print(g[i].elementAt(j) + "\t");
            }
            System.out.println();
        }
    }

    public Iterable<Integer> adj(int v) {
        assert( v >= 0 && v < n );
        return g[v];
    }
}
