/* 邻接矩阵的创建 */

typedef char VertexType; /* 顶点类型应由用户定义 */
typedef int EdgeType;    /* 边上的权值类型应由用户定义 */
#define MAXVEX 100       /* 最大顶点数，应由用户定义 */
#define INFINITY 65535   /* 用65535来代表无限 */

typedef struct
{
    VertexType vexs[MAXVEX];  /* 顶点表 */
    EdgeType arc[MAXVEX][MAXVEX];  /* 邻接矩阵，可看作边表 */
    int numVertexes, numEdges;  /* 图中当前的顶点数和边数 */
}MGraph;
