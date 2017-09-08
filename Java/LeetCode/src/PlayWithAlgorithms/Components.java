package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/8.
 */
public class Components {

    private Graph G;
    private boolean[] visited;
    private int ccount;
    private int[] id;

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
}
