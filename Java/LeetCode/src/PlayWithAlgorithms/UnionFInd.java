package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/26.
 */
public class UnionFInd {

    private int[] id;
    private int count;

    public UnionFInd(int n) {
        count = n;
        for (int i = 0; i < n; i++) {
            id[i] = i;
        }
    }

    public int find(int p) {
        assert (p >= 0 && p < count);
        return id[p];
    }
}
