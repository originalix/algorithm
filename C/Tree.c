#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include "Tree.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

typedef int Status;

struct TreeNode
{
    ElementType Element;
    SearchTree Left;
    SearchTree Right;
};

SearchTree MakeEmpty(SearchTree T)
{
    if (T != NULL)
    {
        MakeEmpty(T->Left);
        MakeEmpty(T->Right);
        free(T);
    }
    return NULL;
}

Position Find(ElementType X, SearchTree T)
{
    if( T == NULL )
        return NULL;
    if (X < T->Element )
        return Find(X, T->Left);
    else
    if (X > T->Element)
        return Find(X, T->Right);
    else
        return T;
}

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    return 0;
}