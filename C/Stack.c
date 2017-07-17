#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "Stack.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

typedef int Status;

struct Node
{
    ElementType Element;
    PtrToNode Next;
};

Status IsEmpty(Stack S)
{
    if (S->Next == NULL)
        return TRUE;
    else
        return ERROR;
}

Stack CreateStack()
{
    Stack S;

    S = ( Stack )malloc(sizeof( struct Node ));
    if (S == NULL)
        printf("Out of space!\n");
    S->Next = NULL;
    MakeEmpty(S);
    return S;
}

void MakeEmpty(Stack S)
{
    if (S == NULL)
        printf("Must use CreateStack first\n");
    else
        while(!IsEmpty(S)) {
            Pop(S);
        }
}

void Push(ElementType X, Stack S)
{
    PtrToNode TmpCell;

    TmpCell = malloc(sizeof(struct Node));
    if (TmpCell == NULL)
        printf("Out of space!\n");
    else
        TmpCell->Element = X;
        TmpCell->Next = S->Next;
        S->Next = TmpCell;
}

ElementType Top(Stack S)
{
    if (!IsEmpty(S))
        return S->Next->Element;
    printf("Empty Stack!\n");
    return 0; /* Return value used to avoid warning */
}

void Pop(Stack S)
{
    PtrToNode FirstCell;

    if (IsEmpty(S))
        printf("Empty Stack!\n");
    else
        FirstCell = S->Next;
        S->Next = S->Next->Next;
        free(FirstCell);
}

void PrintStack(Stack S)
{
    PtrToNode P;
    printf("打印栈中元素: \n");
    for(P = S->Next; P != NULL; P = P->Next)
        printf("%5d\n", P->Element);
    printf("\n");
}

int main(int argc, char const *argv[])
{
    Stack S;
    if(!(S = CreateStack()))
        printf("Create stack failed.\n");
    else
        printf("Create stack success\n");
    if (IsEmpty(S) == TRUE)
        printf("Stack is empty.\n");
    else
        printf("Stack is not empty.\n");
    for (int i = 20; i < 30; i++)
    {
        Push(i, S);
    }
    PrintStack(S);
    printf("Hello wsx\n");
    return 0;
}