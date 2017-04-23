/**
 * Created by Leon on 17/4/21.
 */
public class MaxSubseqSum {
    public static int MaxSubseqSum1(int[] A, int N) {
        int ThisSum, MaxSum = 0;
        int i, j, k;
        for (i = 0; i < N; i++) {
            for (j = i; j < N; j++) {
                ThisSum = 0;
                for (k = i; k <= j; k++) {
                    ThisSum += A[k];
                }
                if (ThisSum > MaxSum) {
                    MaxSum = ThisSum;
                }
            }
        }
        return MaxSum;
    }

    public static int MaxSubseqSum2(int[] A, int N) {
        int ThisSum;
        int MaxSum = 0;
        int i, j;
        for (i = 0; i < N; i++) {
            ThisSum = 0;
            for (j = i; j < N; j++) {
                ThisSum += A[j];
                if (ThisSum > MaxSum) {
                    MaxSum = ThisSum;
                }
            }
        }
        return MaxSum;
    }

    /**
     * 分治法，保持API一致
     * @param A 求解数列
     * @param N 元素总数
     * @return
     */
    public static int MaxSubseqSum3(int[] A, int N) {
        return DivideAndConquer(A, 0, N-1);
    }

    /**
     * 分治法主体
     * @param List 求解数列
     * @param left 左半边的下标
     * @param right 右半边的下标
     * @return 所求数列的最大子列和
     */
    public static int DivideAndConquer(int[] List, int left, int right) {
        int MaxLeftSum, MaxRightSum;
        int MaxLeftBorderSum, MaxRightBorderSum;
        int LeftBorderSum, RightBorderSum;
        int center, i;

        if (left == right) {
            if (List[left] > 0) {
                return List[left];
            } else {
                return 0;
            }
        }

        center = (left + right) / 2;

        MaxLeftSum = DivideAndConquer(List, left, center);
        MaxRightSum = DivideAndConquer(List, center + 1, right);

        MaxLeftBorderSum = 0; LeftBorderSum = 0;
        for (i = center; i >= left; i--) {
            LeftBorderSum += List[i];
            if (LeftBorderSum > MaxLeftBorderSum) {
                MaxLeftBorderSum = LeftBorderSum;
            }
        }

        MaxRightBorderSum = 0; RightBorderSum = 0;
        for (i = center + 1; i <= right; i++) {
            RightBorderSum += List[i];
            if (RightBorderSum > MaxLeftBorderSum) {
                MaxRightBorderSum = RightBorderSum;
            }
        }
        return Max3(MaxLeftSum, MaxRightSum, MaxLeftBorderSum + MaxRightBorderSum);
    }

    /**
     * 取三个数中的最大值
     * @return int
     */
    private static int Max3(int A, int B, int C) {
        return A > B ? A > C ? A : C : B > C ? B : C;
    }

    public static int MaxSubseqSum4(int[] A, int N) {
        int ThisSum, MaxSum;
        int i;
        ThisSum = MaxSum = 0;
        for (i = 0; i < N; i++) {
            ThisSum += A[i];
            if (ThisSum > MaxSum) {
                MaxSum = ThisSum;
            } else if (ThisSum < 0) {
                ThisSum = 0;
            }
        }
        return MaxSum;
    }

    private static void testFunction1(int[] List, int size, int runCount) {
        //算法1运行时间
        int maxSum1 = 0;
        long startTime1 = System.currentTimeMillis();
        for (int i = 0; i < runCount; i++) {
            maxSum1 = MaxSubseqSum1(List, size);
        }
        long endTime1 = System.currentTimeMillis();
        System.out.println("Max Subsequence Sum 1 is " + maxSum1);
        System.out.println("function1 run time is  "+ (endTime1 - startTime1) +"ms");
    }

    private static void testFunction2(int[] List, int size, int runCount) {
        //算法2运行时间
        int maxSum2 = 0;
        long startTime2 = System.currentTimeMillis();
        for (int i = 0; i < runCount; i++) {
            maxSum2 = MaxSubseqSum2(List, size);
        }
        long endTime2 = System.currentTimeMillis();
        System.out.println("Max Subsequence Sum 2 is " + maxSum2);
        System.out.println("function2 run time is  "+ (endTime2 - startTime2) +"ms");
    }

    private static void testFunction3(int[] List, int size, int runCount) {
        //算法3运行时间
        int maxSum3 = 0;
        long startTime3 = System.currentTimeMillis();
        for (int i = 0; i < runCount; i++) {
            maxSum3 = MaxSubseqSum3(List, size);
        }
        long endTime3 = System.currentTimeMillis();
        System.out.println("Max Subsequence Sum 3 is " + maxSum3);
        System.out.println("function3 run time is  "+ (endTime3 - startTime3) +"ms");
    }

    private static void testFunction4(int[] List, int size, int runCount) {
        //算法4运行时间
        int maxSum4 = 0;
        long startTime4 = System.currentTimeMillis();
        for (int i = 0; i < runCount; i++) {
            maxSum4 = MaxSubseqSum3(List, size);
        }
        long endTime4 = System.currentTimeMillis();
        System.out.println("Max Subsequence Sum 4 is " + maxSum4);
        System.out.println("function4 run time is  "+ (endTime4 - startTime4) +"ms");
    }

    public static void main(String[] args) {
        int size = 31;
        int[] testArr = {3, -1, 5, 10, -8, 2, 1, 4, 0, 7, -5, -6, 3, -8, -10,
                10, -20, -8, 0, 3, 0, -9, -10, 5, 3, 0, -8, 10, -4, 10, -7};
        int runCount = 100000;
        testFunction1(testArr, size, runCount);
        testFunction2(testArr, size, runCount);
        testFunction3(testArr, size, runCount);
        testFunction4(testArr, size, runCount);
    }
}
