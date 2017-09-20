#include <iostream>
#include <iomanip>
#include "DenseGraph.h"
#include "SparseGraph.h"
#include "ReadGraph.h"
#include "LazyPrimMST.h"
#include "PrimMST.h"
#include "KruskalMST.h"
#include "Dijkstra.h"

using namespace std;

int main() {
    
    cout << "Hello wsx" << endl;
    
    string filename = "testShortestG1.txt";

    int V = 5;

    // cout << fixed << setprecision(2);

    SparseGraph<int> g = SparseGraph<int>(V, true);
    ReadGraph<SparseGraph<int>, int> readGraph(g, filename);
    
    cout << "Test Dijkstra: " << endl << endl;

    Dijkstra<SparseGraph<int>, int> dij(g, 0);

    for (int i = 0; i < V; i++) {
        if ( dij.hasPathTo(i) ) {
            cout << "Shortest Path to" << i << " : " << dij.shortestPathTo(i) << endl;
            dij.showPath(i);
        } else {
            cout << "No Path to " << i << endl;
        }

        cout << "---------------" << endl;
    }

    return 0;
}
