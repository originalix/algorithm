#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include "HashQuad.h"

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define MinTableSize 5

typedef int Status;

enum KindOfEntry
{
    Legitimate,
    Empty,
    Deleted
};

struct HashEntry
{
    ElementType Element;
    enum KindOfEntry Info;
};

typedef struct HashEntry Cell;

struct HashTbl
{
    int TableSize;
    Cell *TheCells;
};

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

/* 初始化开放定址散列表的例程 */
HashTable InitializeTable(int TableSize)
{
    HashTable H;
    int i;

    if (TableSize < MinTableSize)
        printf("Table Size too small \n");
        return NULL;

    H = malloc( sizeof( struct HashTbl ) );
    if (H == NULL)
        printf("Out of Space\n");
    H->TableSize = NextPrime(TableSize);

    H->TheCells = malloc( sizeof( Cell ) * H->TableSize );
    if (H->TheCells == NULL)
        printf("Out of space\n");

    for(i = 0; i < H->TableSize; i++) {
        H->TheCells[i].Info = Empty;
    }

    return H;
}

Position Find(ElementType Key, HashTable H)
{
    Position CurrentPos;
    int CollisionNum;

    CollisionNum = 0;
    CurrentPos = Hash(Key, H->TableSize);
    while(H->TheCells[CurrentPos].Info != Empty &&
          H->TheCells[CurrentPos].Element != Key)
    {
        CurrentPos += 2 * ++CollisionNum - 1;
        if (CurrentPos >= H->TableSize)
            CurrentPos -= H->TableSize;
    }

    return CurrentPos;
}

void Insert(ElementType Key, HashTable H)
{
    Position Pos;
    Pos = Find(Key, H);
    if (H->TheCells[Pos].Info != Legitimate)
    {
        H->TheCells[Pos].Info = Legitimate;
        H->TheCells[Pos].Element = Key;
    }
}

int main(int argc, char const *argv[])
{
    printf("Hello Wsx\n");
    return 0;
}