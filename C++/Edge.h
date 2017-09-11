#include <iostream>
#include <cassert>

using namespace std;

template <typename Weight>
class Edge {
private:
    int a, b;
    Weight weight;

public:
    Edge(int a, int b, Weight weight) {
        this->a = a;
        this->b = b;
        this->weight = weight;
    }

    Edge() {}

    ~Edge() {}

    int v() { return a; }
    int w() { return b; }
    Weight wt() { return weight; }
};