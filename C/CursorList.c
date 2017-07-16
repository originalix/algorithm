#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "CursorList.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define SpaceSize 100

typedef int Status;

struct Node
{
    ElementType Element;
    Position Next;
};

struct Node CursorSpace[ SpaceSize ];

/* initialize the CursorSpace */
void InitCursorSpace()
{
    int i;
    for(i = 0; i < SpaceSize; i++)
        CursorSpace[i].Next = i == SpaceSize-1 ? 0 : i+1;
}

static Position CursorAlloc(void)
{
    Position P;

    P = CursorSpace[0].Next;
    CursorSpace[0].Next = CursorSpace[P].Next;

    return P;
}

static void CursorFree(Position P)
{
    CursorSpace[P].Next = CursorSpace[0].Next;
    CursorSpace[0].Next = P;
}

int main(int argc, char const *argv[])
{
    InitCursorSpace();
    printf("Hello Wsx\n");
    return 0;
}