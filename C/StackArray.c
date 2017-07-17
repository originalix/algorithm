#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "StackArray.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define EmptyTOS (-1)
#define MinStackSize (5)

typedef int Status;

struct StackRecord
{
    int Capacity;
    int TopOfStack;
    ElementType *Array;
};


int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    return 0;
}