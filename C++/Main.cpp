#include <iostream>
#include <iomanip>
#include "SparseGraph.h"
#include "DenseGraph.h"
#include "ReadGraph.h"

using namespace std;

int main() {
    
    cout << "Hello wsx" << endl;
    
    string filename = "testG3.txt";

    int V = 8;

    cout << fixed << setprecision(2);

    DenseGraph<double> g1 = DenseGraph<double>(V, false);
    ReadGraph<DenseGraph<double>, double> readGraph1(g1, filename);
    g1.show();
    cout << endl;
    
    return 0;
}
 