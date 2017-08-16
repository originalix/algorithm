/**
 * Created by Lix on 2017/8/16.
 */
public class RemoveDuplicates_26 {
    public int removeDuplicates(int[] nums) {
        int k = nums.length - 1;
        for (int i = 0; i < nums.length; i++) {
            for (int j = k; j > i; j--) {
                if (i >= k)
                    break;
                if (nums[i] == nums[j]) {
                     int temp = nums[k];
                    nums[k] = nums[j];
                     nums[j] = temp;
                    k--;
                }
            }
        }
        System.out.println("剩余数组" + nums + "不重复的元素数量: " + (k+1));
        return k+1;
    }

    public static void main(String[] args) {
        int[] a = new int[] {1, 1, 2};
        RemoveDuplicates_26 obj = new RemoveDuplicates_26();
        obj.removeDuplicates(a);
    }
}
