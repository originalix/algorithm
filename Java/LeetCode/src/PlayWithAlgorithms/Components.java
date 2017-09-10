package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/8.
 */

// 求无权图的联通分量
public class Components {

    private Graph G;  // 图的引用
    private boolean[] visited; // 记录dfs的过程中节点是否被访问
    private int ccount;  // 记录联通分量个数
    private int[] id;  // 每个节点所对应的联通分量的标记

    // 构造函数，求出无权图的联通分量
    public Components(Graph graph) {
        this.G = graph;
        visited = new boolean[graph.V()];
        id = new int[graph.V()];
        ccount = 0;
        for (int i = 0; i < graph.V(); i++) {
            visited[i] = false;
            id[i] = -1;
        }

        for (int i = 0; i < graph.V(); i++) {
            if (!visited[i]) {
                dfs(i);
                ccount += 1;
            }
        }
    }

    // 图的深度优先遍历
    private void dfs(int v) {
        visited[v] = true;
        id[v] = ccount;
        for (int i: G.adj(v)) {
            if (!visited[i]) {
                dfs(i);
            }
        }
    }

    // 返回图的联通分量
    public int count() {
        return ccount;
    }

    // 查询点v和点w是否联通
    public boolean isConnected(int v, int w) {
        assert v >= 0 && v < G.V();
        assert w >= 0 && w < G.V();
        return id[v] == id[w];
    }
}