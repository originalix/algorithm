#include <stdio.h>
#include <stdlib.h>
#include "time.h"

int timeTest()
{
    long i = 1000000000000L;

    clock_t start_time, end_time;
    double duration_time;
    start_time = clock();

    while(i--);

    end_time = clock();
    duration_time = (double)(end_time - start_time) / CLOCK_PER_SEC;
    printf("duration : %lf seconds\n", duration_time);
}

int main(int argc, char const *argv[])
{
    printf("Hello WSX\n");
    return 0;
}