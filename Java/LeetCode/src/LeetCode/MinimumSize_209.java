package LeetCode;

/**
 * Created by Lix on 2017/8/22.
 */
public class MinimumSize_209 {

    public int minSubArrayLen(int s, int[] nums) {
        int l = -1, r = 0;
        int ret = 0;
        int sum = 0;

        while (l < r) {
            if (nums.length < 1) {
                break;
            }
            if (r > nums.length - 1) {
                r = nums.length - 1;
            }

            if (sum < s) {
                sum += nums[r++];
            } else {
                ret = saveRet(ret, l+1, r);
                sum -= nums[++l];
            }
        }

        return ret;
    }

    private int saveRet(int ret, int l, int r) {
        assert (r >= l);
        if (ret == 0) {
            return (r - l + 1);
        }
        return (r - l + 1) > ret ? ret : (r - l + 1);
    }

    public static void main(String[] args) {
        int[] arr = new int[] {2,3,1,2,4,3};
        MinimumSize_209 min209 = new MinimumSize_209();
        int a = min209.minSubArrayLen(4, arr);
        System.out.println(a);
    }
}
