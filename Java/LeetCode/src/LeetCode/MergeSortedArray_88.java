package LeetCode;

/**
 * Created by Lix on 2017/11/8.
 */
public class MergeSortedArray_88 {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int index = 0;
        for (int i = 0; i < n; i++) {
            System.out.println(nums2[n]);
            for (int j = index; j < m; j++) {
                if (nums2[n] > nums1[j] && nums2[n] <= nums1[j+1]) {
                    insert(nums1, nums2[n], j+1);
                    index = j+1;
                    break;
                }
                System.out.println(nums1[m]);
            }
        }
    }

    public void insert(int[] nums1, int obj, int index) {
        int temp = nums1[index];
        nums1[index] = obj;

        for (int i = index + 1; i <= nums1.length; i++) {
            int oldObj = nums1[i];
            nums1[i] = temp;
            temp = oldObj;
        }
    }

    public static void main(String[] args) {
        int[] nums1 = new int[]{1, 2, 3, 5, 9};
//        insert(nums1, 4, 3);
        System.out.println(nums1);
    }
}
