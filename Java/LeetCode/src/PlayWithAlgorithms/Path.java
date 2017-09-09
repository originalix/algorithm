package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/9.
 */
public class Path {

    private Graph G;  // 图的引用
    private int s;  // 起始点
    private boolean[] visited;  // 记录dfs的过程中节点是否被访问
    private int[] from;  // 记录路径，from[i]表示查找的路径上i的上一个节点

    public Path(Graph graph, int s) {
        assert s >= 0 && s < graph.V();

        this.G = graph;
        this.s = s;

        visited = new boolean[G.V()];
        from = new int[G.V()];

        for (int i = 0; i < G.V(); i++) {
            visited[i] = false;
            from[i] = -1;
        }

        dfs(s);
    }

    private void dfs(int v) {
        visited[v] = true;

        for (int i: G.adj(v)) {
            if (!visited[i]) {
                from[i] = v;
                dfs(i);
            }
        }
    }
}
