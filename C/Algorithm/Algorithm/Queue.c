#include <stdlib.h>
#include <stdlib.h>
// #include "malloc.h"
#include "queue.h"

/**
 * Create a empty queue
 *
 * @param Q       PQUEUE
 * @param maxsize int
 */
void CreateQueue(PQUEUE Q, int maxsize)
{
    Q->pBase = (int *)malloc(sizeof(int)*maxsize);
    if (NULL == Q->pBase)
    {
        printf("Memory allocation failure\n");
        exit(-1);
    }
    Q->front = 0;
    Q->rear = 0;
    Q->maxsize = maxsize;
}

/**
 * Traverse Queue Print the stack element.
 *
 * @param Q PQUEUE
 */
void TraverseQueue(PQUEUE Q)
{
    int i = Q->front;
    printf("队中的元素是:\n");
    while(i % Q->maxsize != Q->rear)
    {
        printf("%d", Q->pBase[i]);
        i++;
    }
    printf("\n");
}

/**
 * Check the queue size was full.
 *
 * @param  Q PQUEUE
 * @return   bool
 */
bool FullQueue(PQUEUE Q)
{
    if (Q->front == (Q->rear + 1) % Q->maxsize)
        return true;
    else
        return false;
}

/**
 * Return queue is empty.
 *
 * @param  Q PQUEUE
 * @return   bool
 */
bool EmptyQueue(PQUEUE Q)
{
    if (Q->front == Q->rear)
        return true;
    else
        return false;
}

/**
 * insert element to Queue.
 *
 * @param  Q   PQUEUE
 * @param  val element
 * @return     bool
 */
bool Enqueue(PQUEUE Q, int val)
{
    if (FullQueue)
    {
        return false;
    } else {
        Q->pBase[Q->rear] = val;
        Q->rear = (Q->rear + 1) % Q->maxsize;
        return true;
    }
}

/**
 * Delete element in queue.
 *
 * @param  Q   PQUEUE
 * @param  val ELEMENT
 * @return     BOOL
 */
bool Dequeue(PQUEUE Q, int *val)
{
    if (EmptyQueue)
    {
        return FALSE;
    } else {
        *val = Q->pBase[Q->front];
        Q->front = (Q->front + 1) % Q->maxsize;
        return TRUE;
    }
}

int main(int argc, char const *argv[])
{
    printf("hello world\n");
    return 0;
}