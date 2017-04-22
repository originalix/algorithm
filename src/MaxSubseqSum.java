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

    public static int MaxSubseqSum3(int[] A, int N) {
        return DivideAndConquer(A, 0, N-1);
    }

    public static int DivideAndConquer(int[] List, int left, int right) {
        int MaxLeftSum, MaxRightSum;
        int MaxLeftBorderSum, MaxRightBorderSum;
        int LeftBorderSum, RightBorderSum;
        int center, i;
        System.out.println("Now Left = " + left + ", Now Right = " + right);
        if (left == right) {
            if (List[left] > 0) {
                return List[left];
            } else {
                return 0;
            }
        }

        center = (left + right) / 2;
        System.out.println("center = " + center);
        MaxLeftSum = DivideAndConquer(List, left, center);
        MaxRightSum = DivideAndConquer(List, center + 1, right);
        System.out.println("Now MaxLeftSum = " + MaxLeftSum);
        System.out.println("Now MaxRightSum = " + MaxRightSum);

        MaxLeftBorderSum = 0; LeftBorderSum = 0;
        for (i = center; i >= left; i--) {
            LeftBorderSum += List[i];
            if (LeftBorderSum > MaxLeftBorderSum) {
                MaxLeftBorderSum = LeftBorderSum;
            }
        }
        System.out.println("Now MaxLeftBorderSum = " + MaxLeftBorderSum);

        MaxRightBorderSum = 0; RightBorderSum = 0;
        for (i = center + 1; i <= right; i++) {
            RightBorderSum += List[i];
            if (RightBorderSum > MaxLeftBorderSum) {
                MaxRightBorderSum = RightBorderSum;
            }
        }
        System.out.println("Now MaxRightBorderSum = " + MaxRightBorderSum);
        return Max3(MaxLeftSum, MaxRightSum, MaxLeftBorderSum + MaxRightBorderSum);
    }

    private static int Max3(int A, int B, int C) {
        return A > B ? A > C ? A : C : B > C ? B : C;
    }

    public static void main(String[] args) {
        int size = 4;
        int[] testArr = {3, -1, 5, 10};
        int maxSum3;
        maxSum3 = MaxSubseqSum3(testArr, size);
        System.out.println("Max Subsequence Sum 3 is " + maxSum3);
    }

//    public static void main(String[] args) {
//        int size = 10;
//        int[] testArr = {3, -1, 5, 10, -8, 2, 1, 4, 0, 7};
//
//        //算法1运行时间
//        int maxSum1 = 0;
//        long startTime1 = System.currentTimeMillis();
//        for (int i = 0; i < 1000; i++) {
//            maxSum1 = MaxSubseqSum1(testArr, size);
//        }
//        long endTime1 = System.currentTimeMillis();
//        System.out.println("Max Subsequence Sum 1 is " + maxSum1);
//        System.out.println("function1 run time is  "+ (endTime1 - startTime1) +"ms");
//
//        //算法2运行时间
//        int maxSum2 = 0;
//        long startTime2 = System.currentTimeMillis();
//        for (int i = 0; i < 1000; i++) {
//            maxSum2 = MaxSubseqSum2(testArr, size);
//        }
//        long endTime2 = System.currentTimeMillis();
//        System.out.println("Max Subsequence Sum 2 is " + maxSum2);
//        System.out.println("function2 run time is  "+ (endTime2 - startTime2) +"ms");
//    }
}
