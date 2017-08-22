package LeetCode;

/**
 * Created by Lix on 2017/8/22.
 */
public class MinimumSize_209 {

    public int minSubArrayLen(int s, int[] nums) {
        int l = 0, r = 1;
        int ret = 0;
        for (int i = 0; i < nums.length - 1; i++) {
            int sum = 0;
            if (sum < s) {
                sum += nums[r++];
            } else {
                ret = saveRet(ret, l, r);
                sum -= nums[l++];
            }
        }

        return ret;
    }

    private int saveRet(int ret, int l, int r) {
        assert (r >= l);
        return (r - l + 1) > ret ? ret : (r - l + 1);
    }

    public static void main(String[] args) {
        int[] arr = new int[] {2,3,1,2,4,3};
        MinimumSize_209 min209 = new MinimumSize_209();
        int a = min209.minSubArrayLen(7, arr);
        System.out.println(a);
    }
}
