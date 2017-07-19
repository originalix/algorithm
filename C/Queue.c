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
    Q->Front = 1;
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

void DisposeQueue(Queue Q)
{
    MakeEmpty(Q);
    free(Q);
    printf("Dispose Queue\n");
}

static int Succ( int Value, Queue Q )
{
    if (++Value == Q->Capacity)
        Value = 0;
    return Value;
}

void Enqueue(ElementType X, Queue Q)
{
    if (IsFull( Q ))
        printf("Full Queue\n");
    else
        Q->Size++;
        Q->Rear = Succ(Q->Rear, Q);
        Q->Array[Q->Rear] = X;
}

ElementType Front(Queue Q)
{
    if (IsEmpty(Q))
    {
        printf("Queue is empty.\n");
        return 0;
    }
    else
    {
        return Q->Array[Q->Front];
    }
}

void PrintQueue(Queue Q)
{
    if (IsEmpty(Q) > 0)
    {
        printf("Queue is empty.....\n");
        return;
    }

    printf("遍历队列元素: \n");

    int i = Q->Front;
    while(i != Q->Rear) {
        printf("%d\n", Q->Array[i+1]);
        i++;
        i = i % Q->Capacity;
    }
    return;
}

int main(int argc, char const *argv[])
{
    Queue Q;

    if(!(Q = CreateQueue(10)))
        printf("Create queue failed.\n");
    else
        printf("Create queue success\n");

    if (IsEmpty(Q) == TRUE)
        printf("Queue is empty.\n");
    else
        printf("Queue is not empty.\n");

    Enqueue(21, Q);
    Enqueue(1201, Q);
    Enqueue(21, Q);
    Enqueue(1201, Q);
    Enqueue(21, Q);
    Enqueue(1201, Q);
    Enqueue(21, Q);
    Enqueue(1201, Q);
    Enqueue(88, Q);
    // Enqueue(1201, Q);

    PrintQueue(Q);

    int front = Front(Q);
    printf("front element = %d\n", front);

    printf("Hello wsx\n");
    return 0;
}