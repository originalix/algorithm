package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/17.
 */
public class SortTestHelper {

    private SortTestHelper() {}

    /* 生成有n的元素的随机数组, 每个元素的随机范围为 [rangeL, rangeR]*/
    public static Integer[] generateRandomArray(int n, int rangeL, int rangeR) {
        assert rangeL <= rangeR;

        Integer[] arr = new Integer[n];

        for (int i = 0; i < n; i++) {
            arr[i] = new Integer((int)(Math.random() * (rangeR - rangeL + 1) + rangeL));
        }
        return arr;
    }
}
