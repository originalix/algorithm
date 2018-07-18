#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#define OK 1
#define ERROR 0
#define TRUE 1
#define FALSE 0

#define MAXSIZE 100 /* 存储空间初始分配量 */

typedef int Status; /* Status是函数类型，其值是函数的返回结果 */

/* 用于构造二叉树  *******************/
int index = 1;
typedef char String[24]; /* 0号单元存放串的长度 */
String str;

Status StrAssign(String T, char *chars)
{
    int i;
    if (strlen(chars) > MAXSIZE) {
        return ERROR;
    } else {
        T[0] = strlen(chars);
        for (i = 0; i<= T[0]; i++) {
            T[i] = *(chars + i - 1);
        }
        return OK;
    }
}
