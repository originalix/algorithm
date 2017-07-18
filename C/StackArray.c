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
#define MaxElements (10)

typedef int Status;

struct StackRecord
{
    int Capacity;
    int TopOfStack;
    ElementType *Array;
};

Stack CreateStack()
{
    Stack S;

    if (MaxElements < MinStackSize)
        printf("Stack size is too small\n");

    S = malloc( sizeof( struct StackRecord ) );
    if (S == NULL)
        printf("Out of space !!!\n");

    S->Array = malloc( sizeof( ElementType ) * MaxElements );
    if (S->Array == NULL)
        printf("Out of space !!!\n");
    S->Capacity = MaxElements;
    MakeEmpty(S);

    return S;
}

void DisposeStack(Stack S)
{
    if (S != NULL)
        free(S->Array);
        free(S);
}

Status IsEmpty(Stack S)
{
    if (S->TopOfStack == EmptyTOS)
        return TRUE;
    else
        return FALSE;
}

Status IsFull(Stack S)
{
    if (S->TopOfStack == MaxElements)
        return TRUE;
    else
        return FALSE;
}

void MakeEmpty(Stack S)
{
    S->TopOfStack = EmptyTOS;
}

void Push(ElementType X, Stack S)
{
    if (IsFull(S))
        printf("Full Stack.\n");
    else
        S->Array[++S->TopOfStack] = X;
}

ElementType Top(Stack S)
{
    if (!IsEmpty(S))
        return S->Array[S->TopOfStack];
    printf("Empty Stack.\n");
    return 0;
}

void Pop(Stack S)
{
    if (IsEmpty(S))
        printf("Empty Stack.\n");
    else
        S->TopOfStack--;
}

ElementType TopAndPop(Stack S)
{
    if (!IsEmpty(S))
        return S->Array[S->TopOfStack--];
    printf("Empty Stack.\n");
    return 0; /* Return value used to avoid warning */
}

void PrintStack(Stack S)
{
    printf("打印栈中元素: \n");
    for(int i = 0; i <= S->TopOfStack; i++)
        printf("%5d\n", S->Array[i]);
    printf("\n");
}

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    Stack S;
    if(!(S = CreateStack()))
        printf("Create stack failed.\n");
    else
        printf("Create stack success\n");

    if (IsEmpty(S))
        printf("Stack is empty.\n");
    else
        printf("Stack is not empty.\n");

    Push(21, S);
    Push(1201, S);
    Push(2150, S);

    PrintStack(S);

    return 0;
}