package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/26.
 */
public class UnionFInd1 {

    private int[] id;
    private int count;

    public UnionFInd1(int n) {
        count = n;
        for (int i = 0; i < n; i++) {
            id[i] = i;
        }
    }

    public int find(int p) {
        assert (p >= 0 && p < count);
        return id[p];
    }

    public boolean isConnected(int p, int q) {
        return find(p) == find(q);
    }

    public void unionElements(int p, int q) {
        int pID = find(p);
        int qID = find(q);

        if (pID == qID) {
            return;
        }

        for (int i = 0; i < count; i++) {
            if (id[i] == pID) {
                id[i] = qID;
            }
        }
    }
}
