#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "Queue.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

typedef int Status;

struct QueueRecord
{
    int Capacity;
    int Front;
    int Rear;
    int MaxSize;
    ElementType *Array;
}

Status IsEmpty(Queue Q)
{
    if (Q->size == 0)
        return TRUE;
    else
        return FALSE;
}

Statuc IsFull(Queue Q)
{
    if ((Q->Rear + 1) % Q->Capacity == Q->Front)
        return TRUE;
    else
        return FALSE;
}

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    return 0;
}