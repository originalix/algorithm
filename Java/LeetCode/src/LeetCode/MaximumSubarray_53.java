package LeetCode;

/**
 * Created by Lix on 2017/10/2.
 */
public class MaximumSubarray_53 {
    public static int maxSubArray(int[] nums) {
        int sum = 0;
        int maxSum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += nums[i];
            if (sum > maxSum) {
                maxSum = sum;
            }
            if (sum < 0) {
                sum = 0;
            }
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] nums = new int[]{-1,-2,-3,-4,-5,-6};
        int maxSum = maxSubArray(nums);
        System.out.println("max sum is : " + maxSum);
    }
}
