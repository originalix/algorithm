package LeetCode;

/**
 * Created by Lix on 2017/8/22.
 */
public class MinimumSize_209 {

    public int minSubArrayLen(int s, int[] nums) {
        int l = 0, r = 0;
        int ret = 0;
        int sum = 0;

        if (nums.length == 0) {
            return ret;
        }

        while (l <= r) {
            if (r >= nums.length - 1) {
                r = nums.length - 1;
            }
            if (sum < s) {
                sum += nums[r++];
            } else {
                ret = saveRet(ret, l++, r);
            }
        }

        return ret;
    }

    private int saveRet(int oldRet, int l, int r) {
        assert (r >= l);
        int newResult = r - l + 1;
        return min(oldRet, newResult);
    }

    private int min(int oldRet, int newRet) {
        if (oldRet == 0) {
            return newRet;
        }
        if (newRet < oldRet) {
            return newRet;
        }
        return oldRet;
    }

    public static void main(String[] args) {
        int[] arr = new int[] {2,3,1,2,4,3};
        MinimumSize_209 min209 = new MinimumSize_209();
        int a = min209.minSubArrayLen(4, arr);
        System.out.println(a);
    }
}
