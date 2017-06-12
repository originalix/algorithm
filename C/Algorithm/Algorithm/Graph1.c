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

void CreateMGraph(MGraph *G)
{
    int i, j, k, w;
    printf("输入顶点数和边数:\n");
    scanf("%d, %d", &G->numVertexes, &G->numEdges);
    for (i = 0; i < G->numVertexes; i++)
        scanf(&G->vexs[i]);
    for (i = 0; i < G->numVertexes; i++)
        for (j = 0; j < G->numVertexes; j++)
            G->arc[i][j] = INFINITY;
    for (k = 0; k < G->numVertexes; k++)
    {
        printf("输入边(vi, vj)上的下标i, 下标j和权w: \n");
        scanf("%d, %d, %d", &i, &j, &w);
        G->arc[i][j] = w;
        G->arc[j][i] = G->arc[i][j];
    }
}
