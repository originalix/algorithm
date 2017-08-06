#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "HashSep.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define MinTableSize 5

typedef int Status;
typedef unsigned int Index;

struct ListNode
{
    ElementType Element;
    Position Next;
};

typedef Position List;

struct HashTbl
{
    int TableSize;
    List *TheLists;
};

/* 一个简单的散列函数 */
Index HashSimple(const char *Key, int TableSize)
{
    unsigned int HashVal = 0;
    while(*Key != '\0')
    {
        HashVal += *Key++;
    }
    return HashVal % TableSize;
}


/* 判断是否是素数 */
int IsPrime(int num)
{
    if (num == 1) return 0;
    int i;
    for (i = 2; i <= sqrt(num); i++)
    {
        if (num % i == 0)
            return 0;
    }
    return 1;
}

/* 取散列表大小为当前大小的下一个素数 */
int NextPrime(int TableSize)
{
    while(1)
    {
        if (IsPrime(TableSize))
            return TableSize;
        else
            TableSize++;
    }
}

HashTable InitializeTable(int TableSize)
{
    HashTable H;
    int i;

    if (TableSize < MinTableSize)
    {
        printf("Table Size too small\n");
        return NULL;
    }

    H = malloc(sizeof(struct HashTbl));
    if (H == NULL)
        printf("Out of space!!!\n");
    H->TableSize = NextPrime(TableSize);

    H->TheLists = malloc(sizeof(List) * H->TableSize);
    if (H->TheLists == NULL)
        printf("Out of space\n");
    for(i = 0; i < H->TableSize; i++)
    {
        H->TheLists[i] = malloc(sizeof(struct ListNode));
        if (H->TheLists[i] == NULL)
            printf("Out of Space!!!\n");
        else
            H->TheLists[i]->Next = NULL;
    }

    return H;
}

/* 散列表中的查找操作 */
Position Find(ElementType Key, HashTable H)
{
    Position P;
    List L;

    L = H->TheLists[Hash(Key, H->TableSize)];
    P = L->Next;
    while(P != NULL && P->Element != Key) {
        P = P->Next;
    }

    return P;
}

int main(int argc, char const *argv[])
{
    printf("Hello WSX\n");
    return 0;
}