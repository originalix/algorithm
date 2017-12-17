package LeetCode;

/**
 * Created by Lix on 2017/11/8.
 */
public class MergeSortedArray_88 {
    public void merge(int[] A, int m, int[] B, int n) {
        int i = m-1, j = n-1, k = m+n-1;
        while (i > -1 && j > -1) A[k--] = (A[i] > B[j]) ? A[i--] : B[j--];
        while (j > -1) A[k--] = B[j--];
    }

    public static void main(String[] args) {
        int[] nums1 = new int[]{1, 2, 3, 5, 9};
//        insert(nums1, 4, 3);
        System.out.println(nums1);
    }
}
