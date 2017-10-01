package LeetCode;

/**
 * Created by Lix on 2017/10/1.
 */

public class SearchInsertPosition_35 {
    public static int searchInsert(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int mid;
        while (left <= right) {
            mid = (left + right) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                right = mid;
            } else {
                left = mid;
            }
        }
        return mid;
    }
}

// nums有序
// 二分法查找target
// 若找不到 return index
