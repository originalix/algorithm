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

/* Return true if L is empty */
Status IsEmpty(List L)
{
    if (CursorSpace[L].Next == 0)
        return TRUE;
    else
        return FALSE;
}

/* Return true if P is the last position in list L */
/* Parameter L is unused in this implementation */
Status IsLast(Position P, List L)
{
    if (CursorSpace[P].Next == 0)
        return TRUE;
    else
        return FALSE;
}

/* Return Position of X in L; 0 if not found */
/* Uses a header node */
Position Find(ElementType X, List L)
{
    Position P;

    P = CursorSpace[L].Next;
    while(P && CursorSpace[P].Element != X) {
        P = CursorSpace[P].Next;
    }
    return P;
}

void Delete(ElementType X, List L)
{
    Position P, TmpCell;

    P = FindPrevious(X, L);
    if (!IsLast(P, L))
        TmpCell = CursorSpace[P].Next;
        CursorSpace[P].Next = CursorSpace[TmpCell].Next;
        CursorFree(TmpCell);
}

Position FindPrevious(ElementType X, const List L)
{

}

int main(int argc, char const *argv[])
{
    InitCursorSpace();
    List L = CursorAlloc();
    printf("检查链表是否为空: %d\n", IsEmpty(L));
    printf("Hello Wsx\n");
    return 0;
}
