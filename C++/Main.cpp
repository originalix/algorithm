#include <iostream>
#include "SparseGraph.h"
#include "DenseGraph.h"
#include "ReadGraph.h"
#include "Path.h"

using namespace std;

int main() {
    cout << "Hello wsx" << endl;

    string filename = "testG2.txt";
    SparseGraph g = SparseGraph(7, false);
    ReadGraph<SparseGraph> readGraph(g, filename);
    g.show();
    cout << endl;

    Path<SparseGraph> path(g, 0);
    cout << "Path from 0 to 6: " << endl;
    path.showPath(6);

    return 0;
}
 