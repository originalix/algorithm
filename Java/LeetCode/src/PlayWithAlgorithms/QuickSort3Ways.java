package PlayWithAlgorithms;

/**
 * Created by Lix on 2017/8/18.
 */
public class QuickSort3Ways {

    private QuickSort3Ways() {}

    public static void sort(Comparable[] arr) {
        sort(arr, 0, arr.length - 1);
    }

    private static void sort(Comparable[] arr, int l, int r) {
        if (r - l <= 15) {
            InsertionSort.sort(arr, l, r);
            return;
        }

        swap(arr, l, (int) ((Math.random() * (r-l+1)) + l));

        Comparable v = arr[l];

        int lt = l;
        int gt = r + 1;
        int i = l + 1;

        while (i < gt) {
            if (arr[i].compareTo( v ) < 0) {
                swap(arr, i, lt+1);
                lt++;
                i++;
            } else if (arr[i].compareTo( v ) > 0) {
                swap(arr, i, gt-1);
                gt--;
            } else {
                i++;
            }
        }

        swap(arr, l, lt);

        sort(arr, l, lt-1);
        sort(arr, gt, r);
    }

    private static void swap(Object[] arr, int i, int j) {
        Object t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    public static void main(String[] args) {
        int N = 1000000;

        // 测试1 一般性测试
        System.out.println("Test for random array, size = " + N + " , random range [0, " + N + "]");

        Integer[] arr1 = SortTestHelper.generateRandomArray(N, 0, N);

        SortTestHelper.testSort("PlayWithAlgorithms.QuickSort3Ways", arr1);

        int swapTimes = 100;
        assert swapTimes >= 0;

        // 测试2 近乎有序数组
        System.out.println("Test for nearly ordered array, size = " + N + " , swap time = " + swapTimes);

        arr1 = SortTestHelper.generateNearlyOrderedArray(N, swapTimes);

        SortTestHelper.testSort("PlayWithAlgorithms.QuickSort3Ways", arr1);

        return;
    }
}
