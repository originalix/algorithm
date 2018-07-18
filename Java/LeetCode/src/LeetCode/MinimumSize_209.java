package LeetCode;

/**
 * Created by Lix on 2017/8/22.
 */
public class MinimumSize_209 {

    // 滑动窗口的思路
    // 时间复杂度: O(n)
    // 空间复杂度: O(1)
    public int minSubArrayLen(int s, int[] nums) {
        int l = 0, r = -1;
        int sum = 0;
        int res = nums.length + 1;

        while (l < nums.length) {

            if (r + 1 < nums.length && sum < s) {
                sum += nums[++r];
            } else {
                sum -= nums[l++];
            }

            if (sum >= s) {
                res = min(res, r - l + 1);
            }
        }

        if (res == nums.length + 1) {
            return 0;
        }

        return res;
    }

    //暴力解法
    public int minSubArrayLen1(int s, int[] nums) {
        int res = nums.length + 1;
        for (int l = 0; l < nums.length; l++) {
            for (int r = l; r < nums.length; r++) {
                int sum = 0;
                for (int i = l; i <= r; i++) {
                    sum += nums[i];
                }
                if (sum >= s) {
                    res = min(res, r - l + 1);
                }
            }
        }

        if (res == nums.length + 1) {
            return 0;
        }

        return res;
    }

    private int min(int oldRet, int newRet) {
        return oldRet < newRet ? oldRet : newRet;
    }

    public static void main(String[] args) {
        int[] arr = new int[] {1, 4, 4};
        MinimumSize_209 min209 = new MinimumSize_209();
        int a = min209.minSubArrayLen(4, arr);
        System.out.println(a);
    }
}
