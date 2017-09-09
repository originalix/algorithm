package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/9/9.
 */
public class Path {

    private Graph G;  // 图的引用
    private int s;  // 起始点
    private boolean[] visited;  // 记录dfs的过程中节点是否被访问
    private int[] from;  // 记录路径，from[i]表示查找的路径上i的上一个节点

}
