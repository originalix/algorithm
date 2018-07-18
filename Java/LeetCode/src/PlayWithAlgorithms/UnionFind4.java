package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/29.
 */
public class UnionFind4 {
    private int[] parent;
    private int[] rank;
    private int count;

    public UnionFind4(int count) {
        parent = new int[count];  // parent[i]表示第i个元素所指向的父节点
        rank = new int[count];  // rank[i]表示以i为根的集合所表示的树的层数
        this.count = count;

        for (int i = 0; i < count; i++) {
            parent[i] = i;
            rank[i] = 1;
        }
    }

    public int find(int p) {
        assert (p >= 0 && p < count);

        while (p != parent[p]) {
            p = parent[p];
        }

        return p;
    }

    public boolean isConnected(int p, int q) {
        return find(p) == find(q);
    }

    public void unionElements(int p, int q) {
        int pRoot = find(p);
        int qRoot = find(q);

        if (pRoot == qRoot) {
            return;
        }

        // 根据两个元素所在树的元素个数不同判断合并方向
        // 将元素个数少的集合合并到元素个数多的集合上
        if (rank[pRoot] < rank[qRoot]) {
            parent[pRoot] = qRoot;
        } else if (rank[qRoot] < rank[pRoot]){
            parent[qRoot] = pRoot;
        } else {
            parent[pRoot] = qRoot;
            rank[qRoot] += 1;
        }
    }
}
