#include <stdio.h>
#include <stdlib.h>

/* 分而治之 */
int MaxSubsequenceSum(const int A[], int N)
{
    return MaxSubSum(A, 0, N-1);
}

int MaxSubSum(const int A[], int Left, int Right)
{
    int MaxLeftSum, MaxRightSum;
    int MaxLeftBorderSum, MaxRightBorderSum;
    int LeftBorderSum, RightBorderSum;
    int Center, i;

    if (Left == Right)
        if (A[Left] > 0)
            return A[Left];
        else
            return 0;

    Center = (Left + Right) / 2;
    MaxLeftSum = MaxSubSum(A, Left, Center);
    MaxRightSum = MaxSubSum(A, Center + 1, Right);

    MaxLeftBorderSum = 0; LeftBorderSum = 0;
    for (i = Center; i >= Left; i--)
    {
        LeftBorderSum += A[i];
        if (LeftBorderSum > MaxLeftBorderSum)
            MaxLeftBorderSum = LeftBorderSum;
    }

    MaxRightBorderSum = 0; RightBorderSum = 0;
    for (i = Center + 1; i <= Right; i++)
    {
        RightBorderSum += A[i];
        if (RightBorderSum > MaxRightBorderSum)
            MaxRightBorderSum = RightBorderSum;
    }

    return Max3(MaxLeftSum, MaxRightSum, MaxLeftBorderSum + MaxRightBorderSum);
}

int Max3(int A, int B, int C)
{
    return A > B ? A > C ? A : C : B > C ? B : C;
}

/* 联机算法 */
int MaxSubsequenceSum1(const int A[], int N)
{

}

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    int A[] = {4, -3, 5, -2, -1, 2, 6, -2};
    int sum = MaxSubsequenceSum(A, 8);
    printf("sum = %d\n", sum);
    return 0;
}