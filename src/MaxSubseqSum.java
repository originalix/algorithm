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

    public static void main(String[] args) {
        int size = 10;
        int[] testArr = {3, -1, 5, 10, -8, 2, 1, 4, 0, 7};

        //算法1运行时间
        int maxSum1 = 0;
        long startTime1 = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            maxSum1 = MaxSubseqSum1(testArr, size);
        }
        long endTime1 = System.currentTimeMillis();
        System.out.println("Max Subsequence Sum 1 is " + maxSum1);
        System.out.println("function1 run time is  "+ (endTime1 - startTime1) +"ms");

        //算法2运行时间
        int maxSum2 = 0;
        long startTime2 = System.currentTimeMillis();
        for (int i = 0; i < 1000; i++) {
            maxSum2 = MaxSubseqSum2(testArr, size);
        }
        long endTime2 = System.currentTimeMillis();
        System.out.println("Max Subsequence Sum 2 is " + maxSum2);
        System.out.println("function2 run time is  "+ (endTime2 - startTime2) +"ms");
    }
}
