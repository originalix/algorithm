#include <iostream>
#include <iomanip>
#include "DenseGraph.h"
#include "SparseGraph.h"
#include "ReadGraph.h"
#include "LazyPrimMST.h"
#include "PrimMST.h"
#include "KruskalMST.h"

using namespace std;

int main() {
    
    cout << "Hello wsx" << endl;
    
    string filename = "testG3.txt";

    int V = 8;

    cout << fixed << setprecision(2);

    SparseGraph<double> g = SparseGraph<double>(V, false);
    ReadGraph<SparseGraph<double>, double> readGraph2(g, filename);
    g.show();
    cout << endl;

    // Test Lazy Prim MST
    cout << "Test Lazy Prim MST:" << endl;
    LazyPrimMST<SparseGraph<double>, double> lazyPrimMST(g);
    vector< Edge<double> > mst = lazyPrimMST.mstEdges();
    for (int i = 0; i < mst.size(); i++) {
        cout << mst[i] << endl;
    }
    cout << "The MST weight is : " << lazyPrimMST.result() << endl;
    cout << endl;

    // Test Prim MST
    cout << "Test Prim MST: " << endl;
    PrimMST<SparseGraph<double>, double> primMST(g);
    mst = primMST.mstEdges();
    for (int i = 0; i < mst.size(); i++) {
        cout << mst[i] << endl;
    }
    cout << "The MST weight is : " << primMST.result() << endl;
    cout << endl;

    // Test Kruskal MST
    cout << "Test Kruskal MST: " << endl;
    KruskalMST<SparseGraph<double>, double> kruskalMST(g);
    mst = kruskalMST.mstEdges();
    for (int i = 0; i < mst.size(); i++) {
        cout << mst[i] << endl;
    }
    cout << "The MST weight is : " << kruskalMST.result() << endl;
    cout << endl;

    return 0;
}
 