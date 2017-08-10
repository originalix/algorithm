#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "BinHeap.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define MinPQSize 10
#define MinData -2150

typedef int Status;
struct HeapStruct
{
    int Capacity;
    int Size;
    ElementType *Elements;
};

PriorityQueue Initialize(int MaxElements)
{
    PriorityQueue H;
    if (MaxElements < MinPQSize)
    {
        printf("Priority queue size is too small\n");
        return NULL;
    }

    H = malloc(sizeof( struct HeapStruct ));
    if (H == NULL)
    {
        printf("Out of space\n");
    }

    H->Elements = malloc(sizeof( (MaxElements + 1) * sizeof( ElementType )));
    if (H->Elements == NULL)
        printf("Out of space\n");

    H->Capacity = MaxElements;
    H->Size = 0;
    H->Elements[0] = MinData;

    return H;
}

Status IsFull(PriorityQueue H)
{
    if (H->Capacity == H->Size++)
        return TRUE;
    else
        return FALSE;
}

Status IsEmpty(PriorityQueue H)
{
    if (H->Size == 0)
        return TRUE;
    else
        return FALSE;
}

void Insert( ElementType X, PriorityQueue H )
{
    int i;
    if (IsFull(H))
    {
        printf("Priority queue is full\n");
        return;
    }

    for (i = ++H->Size; H->Elements[i / 2] < X; i /= 2)
    {
        H->Elements[i] = H->Elements[i / 2];
    }

    H->Elements[i] = X;
}

ElementType DeleteMin(PriorityQueue H)
{
    int i, Child;
    ElementType MinElement, LastElement;

    if(IsEmpty(H))
    {
        printf("Priority queue is empty\n");
        return H->Elements[0];
    }
    MinElement = H->Elements[1];
    LastElement = H->Elements[H->Size--];

    for (i = 0; i * 2 <= H->Size; i = Child)
    {
        Child = i * 2;
        if (Child != H->Size && H->Elements[Child + 1] < H->Elements[Child])
        {
            Child++;
        }
        if (LastElement > H->Elements[Child])
            H->Elements[i] = H->Elements[Child];
        else
            break;
    }

    H->Elements[i] = LastElement;
    return MinElement;
}

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    return 0;
}