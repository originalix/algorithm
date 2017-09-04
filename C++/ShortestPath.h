#include <iostream>
#include <vector>
#include <queue>
#include <stack>
#include <cassert>

using namespace std;

template <typename Graph>
class ShortestPath {

private:
    Graph &G;
    int s;
    bool *visited;
    int *from;
    int *ord;

public:
    ShortestPath( Graph &graph, int s ): G(graph) {
        
    }
};