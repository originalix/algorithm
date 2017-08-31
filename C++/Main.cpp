#include <iostream>
#include "SparseGraph.h"
#include "DenseGraph.h"
#include "ReadGraph.h"

using namespace std;

int main() {
    cout << "Hello wsx" << endl;

    string filename = "textG1.txt";
    SparseGraph g1(13, false);
    ReadGraph<SparseGraph> readGraph1( g1, filename );
    cout << "test G1 in Sparse Graph:" << endl;
    g1.show();

    cout << endl;

    DenseGraph g2(13, false);
    ReadGraph<DenseGraph> readGraph2( g2, filename );
    cout << "test G2 in Dense Graph:" << endl;
    g2.show();

    cout << endl;

    return 0;
}
 