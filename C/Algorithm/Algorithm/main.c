#include "string.h"
#include "stdio.h"
#include "stdlib.h"

#include "math.h"
#include "time.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

/* 练习递归函数 */
long factorial(int n)
{
    long result;

    if (n == 0 || n == 1) {
        result =;
    } else {
        printf("递归调用函数\n");
        result = factorial(n - 1) * n;
        printf("递归返回 %d\n", result);
    }
    return result;
}

int main()
{
    printf("hello world\n");
    return 0;
}
