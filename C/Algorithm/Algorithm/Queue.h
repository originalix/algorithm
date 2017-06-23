#ifndef __QUEUE_H_
#define __QUEUE_H_

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

typedef int Status; /* Status是函数类型，其值是函数的返回结果 */

typedef struct queue
{
    int *pBase;
    int front;
    int rear;
    int maxsize;
}PQUEUE;

void CreateQueue(PQUEUE *Q, int maxsize);
void TraverseQueue(PQUEUE *Q);
Status FullQueue(PQUEUE *Q);
Status EmptyQueue(PQUEUE *Q);
Status Enqueue(PQUEUE *Q, int val);
Status Dequeue(PQUEUE *Q, int *val);

#endif