#include <stdio.h>
#include <stdlib.h>

void PrimeSimple(int num)
{
    int a = 0;

    if (num < 1)
    {
        printf("小于1不是素数! \n");
    }

    for (int i = 2; i < num; i++)
    {
        if (num % i == 0)
            a++;
            break;
    }

    if (a > 0)
        printf("%d是素数。\n", num);
    else
        printf("%d不是素数。\n", num);
}

int main(int argc, char const *argv[])
{
    PrimeSimple(6);
    printf("Hello wsx\n");
    return 0;
}