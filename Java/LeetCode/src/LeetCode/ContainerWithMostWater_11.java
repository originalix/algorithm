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
        int maxArea = -999;
        for (int i = 0; i < height.length; i++) {
//            System.out.println("第" + i + "个坐标: " + "(" + i + "," + height[i] + ")");
            for (int j = 0; j < height.length; j++) {
                if (j == i) {
                    continue;
                }
                int Width = i > j ? i- j : j - i;
                int areaHeight = height[i] < height[j] ? height[i] : height[j];

                System.out.println("当前比较的两个坐标: " + "(" + i + "," + height[i] + ") -> " + "(" + j + "," + height[j] + ")");
                System.out.println("当前面积的宽: " + Width + " 高 : " + areaHeight);
                int area = Width * areaHeight;
                if (area > maxArea) {
                    maxArea = area;
                }
            }
        }
        return maxArea;
    }

    public static void main(String[] args) {
        int[] height = new int[]{1, 3, 2};
        int a = maxArea(height);
        System.out.println("最大面积为: " + a);
    }
}
