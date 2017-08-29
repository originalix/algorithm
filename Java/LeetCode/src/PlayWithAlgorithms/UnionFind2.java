package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/29.
 */
public class UnionFind2 {

    private int[] parent;
    private int count;

    public UnionFind2(int count) {
        parent = new int[count];
        this.count = count;

        for (int i = 0; i < count; i++) {
            parent[i] = i;
        }
    }
    
}
