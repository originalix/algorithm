package PlayWithAlgorithms;

import java.util.Stack;
import java.util.Vector;

/**
 * Created by Lix on 2017/9/9.
 */
public class Path {

    private Graph G;  // 图的引用
    private int s;  // 起始点
    private boolean[] visited;  // 记录dfs的过程中节点是否被访问
    private int[] from;  // 记录路径，from[i]表示查找的路径上i的上一个节点

    /**
     * 构造函数，寻路算法，寻找图graph从点s到其他点的路径
     * @param graph graph
     * @param s 寻路起始点s
     */
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

    /**
     * 深度优先遍历
     * @param v 从v点开始深度优先遍历
     */
    private void dfs(int v) {
        visited[v] = true;

        for (int i: G.adj(v)) {
            if (!visited[i]) {
                from[i] = v;
                dfs(i);
            }
        }
    }

    // 查询从s点到w点是否存在路径
    public boolean hasPath(int w) {
        assert w >= 0 && w < G.V();
        return visited[w];
    }

    // 查询点s到点w的路径，存放在vec中
    public Vector<Integer> path(int w) {
        assert(hasPath(w));

        Stack<Integer> stack = new Stack<Integer>();
        int p = w;
        while (p != -1) {
            stack.push(p);
            p = from[p];
        }

        Vector<Integer> vec = new Vector<Integer>();
        while (!stack.isEmpty()) {
            vec.add(stack.pop());
        }

        return vec;
    }

    // 打印出从点s到点w的路径
    public void showPath(int w) {
        assert (hasPath(w));

        Vector<Integer> vec = path(w);
        for (int i = 0; i < vec.size(); i++) {
            System.out.print(vec.elementAt(i));
            if (i == vec.size() - 1) {
                System.out.println();
            } else {
                System.out.print(" -> ");
            }
        }
    }
}
