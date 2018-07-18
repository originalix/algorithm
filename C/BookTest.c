#include <stdio.h>
#include <stdlib.h>
#include "time.h"

void timeTest()
{
    long i = 1000000L;

    clock_t start_time, end_time;
    double duration_time;
    start_time = clock();

    for(int j = 0; j < i; j++)
    {

    }

    end_time = clock();
    duration_time = (double)(end_time - start_time) / CLOCKS_PER_SEC;
    printf("duration : %lf seconds\n", duration_time);
}

void sum1()
{
    int sum = 0;
}

int main(int argc, char const *argv[])
{
    printf("Hello WSX\n");
    timeTest();
    return 0;
}
