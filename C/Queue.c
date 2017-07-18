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
    int Size;
    ElementType *Array;
};

Status IsEmpty(Queue Q)
{
    if (Q->Size == 0)
        return TRUE;
    else
        return FALSE;
}

Status IsFull(Queue Q)
{
    if ((Q->Rear + 1) % Q->Capacity == Q->Front)
        return TRUE;
    else
        return FALSE;
}

void MakeEmpty(Queue Q)
{
    Q->Size = 0;
    Q->Front = 0;
    Q->Rear = 0;
}

Queue CreateQueue(int MaxElements)
{
    Queue Q;
    Q = ( Queue )malloc(sizeof( struct QueueRecord ));
    if (Q == NULL)
        printf("Out of space\n");
    Q->Capacity = MaxElements;
    MakeEmpty(Q);

    return Q;
}

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    return 0;
}