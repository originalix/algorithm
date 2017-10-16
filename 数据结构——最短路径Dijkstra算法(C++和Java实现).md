数据结构——最短路径Dijkstra算法(C++和Java实现)

在上一篇博文里，我记录了最小生成树的算法实现，而在这篇里，我们来讲讲查找最短路径的算法，Dijkstra算法。

Dijkstra's algorithm常用于路由算法或者作为其他图算法的一个子模块。距离来说，如果我们将图的顶点理解为每个城市，而边上的权重表示城市间开车行径的路径，该算法可以用来找到两个城市之间的最短路径。

Dijkstra算法是通过为每个顶点v保留目前为止所找到的从s到v的最短路径来工作的。初始时，原点s的路径权重被赋为0（d[s] = 0)。若对于顶点s存在能直接到达的边，则比较路径的长度，如果路径更短则更新存储的值，当算法结束时，d[v]中存储的便是从s到v的最短路径，或者如果路径不存在的话则是无法访问，用marked数组来记录从s到点v是否存在路径。下面我们来看Dijkstra算法的代码实现，首先是C++版本：

```c++
#include <iostream>
#include <vector>
#include <stack>
#include "Edge.h"
#include "IndexMinHeap.h"

using namespace std;

// Dijkstra算法求最短路径
template <typename Graph, typename Weight>
class Dijkstra {
private:
    Graph &G;                        // 图的引用
    int s;                           // 起始点
    Weight *distTo;                  // distTo[i]存储从起始点s到i的最短路径长度
    bool *marked;                    // 标记数组，在算法运行过程中标记节点i是否被访问
    vector<Edge<Weight> *> from;     // from[i]记录最短路径中，到达i点的边是哪一条
                                     // 可以用来恢复整个最短路径

public:
    // 构造函数，使用Dijkstra算法求最短路径
    Dijkstra(Graph &graph, int s):G(graph) {

        // 算法初始化
        assert( s >= 0 && s < G.V() );
        this->s = s;
        distTo = new Weight[G.V()];
        marked = new bool[G.V()];
        for (int i = 0; i < G.V(); i++) {
            distTo[i] = Weight();
            marked[i] = false;
            from.push_back(NULL);
        }

        // 使用索引堆记录当前找到的到达每个顶点的最短距离
        IndexMinHeap<Weight> ipq(G.V());

        // 对于起始点s进行初始化
        distTo[s] = Weight();
        from[s] = new Edge<Weight>(s, s, 0);
        ipq.insert(s, distTo[s]);
        marked[s] = true;
        while( !ipq.isEmpty() ) {
            int v = ipq.extractMinIndex();
            // distTo[v] 就是s到v的最短距离
            marked[v] = true;
            // 对v的所有相邻节点进行更新
            typename Graph::adjIterator adj(G, v);
            for ( Edge<Weight> *e = adj.begin(); !adj.end(); e = adj.next() ) {
                int w = e->other(v);
                // 如果从s点到w点的最短路径还没有找到
                if ( !marked[w] ) {
                    // 如果w点以前没有访问过
                    // 或者访问过，但是通过当前的v点到w点距离更短，则进行更新
                    if ( from[w] == NULL || distTo[v] + e->wt() < distTo[w] ) {
                        distTo[w] = distTo[v] + e->wt();
                        from[w] = e;
                        if ( ipq.contain(w) )
                            ipq.change( w, distTo[w] );
                        else
                            ipq.insert( w, distTo[w] );
                    }
                }
            }
        }
    }

    // 析构函数
    ~Dijkstra() {
        delete[] distTo;
        delete[] marked;
        delete from[0];
    }

    // 返回从s点到w点的最短路径长度
    Weight shortestPathTo( int w ) {
        assert( w >= 0 && w < G.V() );
        assert( hasPathTo(w) );
        return distTo[w];
    }

    // 判断从s点到w点是否联通
    bool hasPathTo( int w ) {
        assert( w >= 0 && w < G.V() );
        return marked[w];
    }

    // 寻找从s到w的最短路径，将整个路径经过的边存放在vec中
    void shortestPath( int w, vector< Edge<Weight> > &vec ) {
        assert( w >= 0 && w < G.V() );
        assert( hasPathTo(w) );

        // 通过from数组逆向查找到从s到w的路径，存放在栈中
        stack<Edge<Weight>*> s;
        Edge<Weight> *e = from[w];
        while(e->v() != this->s) {
            s.push(e);
            e = from[e->v()];
        }

        s.push(e);

        // 从栈中依次取出元素，获得顺序的从s到w的路径
        while( !s.empty() ) {
            e = s.top();
            vec.push_back(*e);
            s.pop();
        }
    }

    // 打印从s点到w点的路径
    void showPath( int w ) {
        assert( w >= 0 && w < G.V() );
        assert( hasPathTo(w) );

        vector< Edge<Weight> > vec;
        shortestPath( w, vec );
        for (int i = 0; i < vec.size(); i++) {
            cout << vec[i].v() << " -> ";
            if ( i == vec.size() - 1 ) {
                cout << vec[i].w() << endl;
            }
        }
    }
};
```

之后是java版本的:

```java
// Dijkstra算法求最短路径
public class Dijkstra<Weight extends Number & Comparable> {

    private WeightedGraph G;      // 图的引用
    private int s;                // 起始点
    private Number[] distTo;      // distTo[i]存储从起始点s到点i的最短路径长度
    private boolean[] marked;     // 标记数组，在算法运行过程中标记节点是否被访问
    private Edge<Weight>[] from;  // 可以用来恢复整个最短路径

    // 构造函数，使用Dijkstra算法求最短路径
    Dijkstra(WeightedGraph graph, int s) {

        // 算法初始化
        this.G = graph;
        assert s >= 0 && s < G.V();
        this.s = s;
        distTo = new Number[G.V()];

        for (int i = 0; i < G.V(); i++) {
            distTo[i] = 0.0;
            marked[i] = false;
            from[i] = null;
        }

        // 使用索引堆记录当前找到的每个到达顶点的最短距离                                                                     iikkkkkk
        IndexMinHeap<Weight> ipq = new IndexMinHeap<Weight>(G.V());

        // 对于起始点s进行初始化
        distTo[s] = 0.0;
        from[s] = new Edge<Weight>(s, s, (Weight)(Number)(0.0));
        ipq.insert(s, (Weight) distTo[s]);
        marked[s] = true;

        while (!ipq.isEmpty()) {
            int v = ipq.extractMinIndex();

            // distTo[v]就是s到v的最短距离
            marked[v] = true;

            // 对v的所有相邻节点进行更新
            for (Object item : G.adj(v)) {
                Edge<Weight> e = (Edge<Weight>) item;
                int w = e.other(v);

                // 如果s点到w点的最短路径还没有找到
                if (!marked[w]) {

                    // 如果w点以前没有访问过
                    // 或者访问过，但是通过当前v点到w点的距离g更短，则进行更新
                    if (from[w] == null || distTo[v].doubleValue() + e.wt().doubleValue() < distTo[w].doubleValue()) {
                        distTo[w] = distTo[v].doubleValue() + e.wt().doubleValue();
                        from[w] = e;
                        if ( ipq.contain(w) ) {
                            ipq.change(w, (Weight) distTo[w]);
                        } else {
                            ipq.insert(w, (Weight) distTo[w]);
                        }
                    }
                }
            }
        }
    }

    // 返回从s点到w点的最短路径长度
    public Number shortestPathTo(int w) {
        assert w >= 0 && w < G.V();
        assert hasPathTo(w);
        return distTo[w];
    }

    // 判断从s点到w点是否联通
    public boolean hasPathTo(int w) {
        assert w >= 0 && w < G.V();
        return marked[w];
    }

    // 寻找从s点到w点的最短路径，将整个路径存放在vec中
    private Vector<Edge<Weight>> shortestPath(int w) {
        assert w >= 0 && w < G.V();
        assert hasPathTo(w);

        // 通过from数组逆向查找从s到w的路径，存放到栈中
        Stack<Edge<Weight>> s = new Stack<Edge<Weight>>();
        Edge<Weight> e = from[w];
        while (e.v() != this.s) {
            s.push(e);
            e = from[e.v()];
        }

        s.push(e);

        // 从栈中依次取出元素，获得顺序的从s到w的路径
        Vector<Edge<Weight>> res = new Vector<Edge<Weight>>();
        while (!s.isEmpty()) {
            e = s.pop();
            res.add(e);
        }

        return res;
    }

    // 打印出从s点到w点的路径
    public void showPath(int w){

        assert w >= 0 && w < G.V();
        assert hasPathTo(w);

        Vector<Edge<Weight>> path =  shortestPath(w);
        for( int i = 0 ; i < path.size() ; i ++ ){
            System.out.print( path.elementAt(i).v() + " -> ");
            if( i == path.size()-1 )
                System.out.println(path.elementAt(i).w());
        }
    }
}
```

