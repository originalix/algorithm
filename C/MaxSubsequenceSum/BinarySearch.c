#include <stdio.h>
#include <stdlib.h>

#define NotFound -1;

int BinarySearch(const int A[], int X, int N)
{
    int Low, Mid, High;

    Low = 0; High = N - 1;
    while(Low <= High)
    {
        Mid = (Low + High) / 2;
        if (A[Mid] < X)
            Low = Mid + 1;
        else
        if (A[Mid] > X)
            High = Mid - 1;
        else
            return Mid;
    }
    return NotFound;
}

int main(int argc, char const *argv[])
{
    printf("Hello WSX\n");
    int A[] = {3, 12, 21, 33, 50, 99, 1024, 1201};
    int result = BinarySearch(A, 1201, 8);
    printf("result = %d\n", result);
    return 0;
}