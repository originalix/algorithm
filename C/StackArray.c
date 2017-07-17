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

Stack CreateStack(int MaxElements)
{
    Stack S;

    if (MaxElements < MinStackSize)
        printf("Stack size is too small\n");
        exit(-1);

    S = malloc( sizeof( struct StackRecord ) );
    if (S == NULL)
        printf("Out of space !!!\n");
        exit(-1);
    S->Array = malloc( sizeof( ElementType ) * MaxElements );
    if (S->Array == NULL)
        printf("Out of space !!!\n");
        exit(-1);
    S->Capacity = MaxElements;
    MakeEmpty(S);

    return S;
}

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    return 0;
}