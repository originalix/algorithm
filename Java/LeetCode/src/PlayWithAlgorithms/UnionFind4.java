package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/29.
 */
public class UnionFind4 {
    private int[] parent;
    private int[] rank;
    private int count;

    public UnionFind4(int count) {
        parent = new int[count];
        rank = new int[count];
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
