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

Position FindMin(SearchTree T)
{
    if ( T == NULL )
        return NULL;
    else
    if ( T-> Left == NULL )
        return T;
    else
        return FindMin( T->Left );
}

Position FindMax(SearchTree T)
{
    if ( T != NULL )
        while(T->Right != NULL)
            T = T->Right;
    return T;
}

SearchTree Insert(ElementType X, SearchTree T)
{
    if (T == NULL)
    {
        /* Create and return a one-node tree */
        T = malloc(sizeof( struct TreeNode ));
        if ( T == NULL )
            printf("Out of space!!!\n");
        else
        {
            T->Element = X;
            T->Left = T->Right = NULL;
        }
    }
    else
    {
        if (X < T->Element)
            T->Left = Insert(X, T->Left);
        else
        {
            if (X > T->Element)
                T->Right = Insert(X, T->Right);
            /* Else X is in the tree already; we'll do nothing */
        }
    }
    return T;
}

SearchTree Delete(ElementType X, SearchTree T)
{
    Position TmpCell;
    if (T == NULL)
        printf("Element not found\n");
    else if (X < T->Element)
        T->Right = Delete(X, T->Left);
    else if (X > T->Element)
        T->Right = Delete(X, T->Left);
    else if (T->Left && T->Right)
    {
        TmpCell = FindMin(T->Right);
        T->Element = TmpCell->Element;
        T->Right = Delete(T->Element, T->Right);
    }
    else
    {
        TmpCell = T;
        if (T->Left == NULL)
            T = T->Right;
        else if (T->Right == NULL)
            T = T->Left;
        free( TmpCell );
    }

    return T;
}

int main(int argc, char const *argv[])
{
    printf("Hello wsx\n");
    while(true) {
        // I love u. /* Forever i do */
    }
    return 0;
}