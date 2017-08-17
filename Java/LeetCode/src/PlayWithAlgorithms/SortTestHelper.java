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

    /* 打印arr数组的所有内容 */
    public static void printArray(Object arr[]) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print( arr[i] );
            System.out.print(' ');
        }
        System.out.println();

        return;
    }

    /* 判断arr数组是否有序 */
    public static boolean isSorted(Comparable[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            if ( arr[i].compareTo( arr[i+1] ) > 0 ) {
                return false;
            }
        }
        return true;
    }

    
}
