package LeetCode;

/**
 * Created by Lix on 2017/10/1.
 */

public class SearchInsertPosition_35 {
    public static int searchInsert(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1;
        int mid = 0;
        while (left <= right) {
            mid = (left + right) / 2;
            if (nums[mid] == target) {
                return mid;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else if (nums[mid] > target) {
                right = mid - 1;
            }
        }

        if (nums[mid] < target) {
            mid += 1;
        }
        return mid;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{1, 3, 5, 6};
        int target = 8;
        int result = searchInsert(nums, target);
        System.out.println("result is : " + result);
    }
}

// nums有序
// 二分法查找target
// 若找不到 return index
