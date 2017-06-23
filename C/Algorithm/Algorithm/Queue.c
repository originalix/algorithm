#include "queue.h"

#include <stdio.h>
#include <stdlib.h>
#include <math.h>

/**
 * Create a empty queue
 *
 * @param Q       PQUEUE
 * @param maxsize int
 */
void CreateQueue(PQUEUE *Q, int maxsize)
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
    printf("创建队列成功 %d\n", Q->maxsize);
}

/**
 * Traverse Queue Print the stack element.
 *
 * @param Q PQUEUE
 */
void TraverseQueue(PQUEUE *Q)
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
Status FullQueue(PQUEUE *Q)
{
    if (Q->front == (Q->rear + 1) % Q->maxsize)
        return TRUE;
    else
        return FALSE;
}

/**
 * Return queue is empty.
 *
 * @param  Q PQUEUE
 * @return   bool
 */
Status EmptyQueue(PQUEUE *Q)
{
    if (Q->front == Q->rear)
        return TRUE;
    else
        return FALSE;
}

int getLength(PQUEUE Q)
{
    return (Q.rear - Q.front + Q.maxsize) % Q.maxsize;
}

/**
 * insert element to Queue.
 *
 * @param  Q   PQUEUE
 * @param  val element
 * @return     bool
 */
Status Enqueue(PQUEUE *Q, int val)
{
    if (FullQueue(Q))
    {
        return FALSE;
    } else {
        Q->pBase[Q->rear] = val;
        Q->rear = (Q->rear + 1) % Q->maxsize;
        return TRUE;
    }
}

// /**
//  * Delete element in queue.
//  *
//  * @param  Q   PQUEUE
//  * @param  val ELEMENT
//  * @return     BOOL
//  */
// Status Dequeue(PQUEUE Q, int *val)
// {
//     if (EmptyQueue(Q))
//     {
//         return FALSE;
//     } else {
//         *val = Q->pBase[Q->front];
//         Q->front = (Q->front + 1) % Q->maxsize;
//         return TRUE;
//     }
// }

int main(int argc, char const *argv[])
{
    printf("hello world\n");
    printf("status %d\n", OK);
    PQUEUE queue;
    CreateQueue(&queue, 10);
    printf("插入数据结果 %d\n", Enqueue(&queue, 100));
    printf("插入数据结果 %d\n", Enqueue(&queue, 20));
    printf("插入数据结果 %d\n", Enqueue(&queue, 1));
    printf("队列长度 : %d\n", getLength(queue));
    TraverseQueue(&queue);
    printf("队列是否溢出 : %d\n", FullQueue(&queue));
    printf("队列是否为空 : %d\n", EmptyQueue(&queue));
    return 0;
}
