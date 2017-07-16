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

int IsEmpty(Stack S)
{
    if (S->Next == NULL)
        return TRUE;
    else
        return ERROR;
}

Stack CreateStack()
{
    Stack S;

    S = malloc(sizeof(struct Node));
    if (S == NULL)
        printf("Out of space!\n");
    S->Next == NULL;
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

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    return 0;
}