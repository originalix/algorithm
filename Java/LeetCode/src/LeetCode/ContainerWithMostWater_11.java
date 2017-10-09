package LeetCode;

/**
 * Created by Lix on 2017/10/9.
 */
public class ContainerWithMostWater_11 {

    // 思路分析：
    // 构建成坐标点
    // 使用O( logN^2 )的时间复杂度 暴力的对比 记录最大的面积
    // 返回最大的面积
    // 注意点，构建坐标，存水的面积计算
    public static int maxArea(int[] height) {
        for (int i = 0; i < height.length; i++) {
            System.out.println("第" + i + "个坐标: " + "(" + i + "," + height[i] + ")");
        }
        return 0;
    }

    public static void main(String[] args) {
        int[] height = new int[]{1, 3, 2};
        int a = maxArea(height);
    }
}
