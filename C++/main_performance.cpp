#include <iostream>
#include <iomanip>
#include <vector>
#include <ctime>
#include <string>
#include "DenseGraph.h"
#include "SparseGraph.h"
#include "ReadGraph.h"
#include "LazyPrimMST.h"
#include "PrimMST.h"

using namespace std;

int main() {
    cout << "Hello wsx" << endl;

    string filename1 = "testWeightG1.txt";
    int V1 = 8;

    string filename2 = "testWeightG2.txt";
    int V2 = 250;

    string filename3 = "testWeightG3.txt";
    int V3 = 1000;

    string filename4 = "testWeightG4.txt";
    int V4 = 10000;

    SparseGraph<double> g1 = SparseGraph<double>(V1, false);
    ReadGraph<SparseGraph<double>, double> readGraph1(g1, filename1);
    cout << filename1 << " load successfully ." << endl;

    SparseGraph<double> g2 = SparseGraph<double>(V2, false);
    ReadGraph<SparseGraph<double>, double> readGraph2(g2, filename2);
    cout << filename2 << " load successfully ." << endl;

    SparseGraph<double> g3 = SparseGraph<double>(V3, false);
    ReadGraph<SparseGraph<double>, double> readGraph3(g3, filename3);
    cout << filename3 << " load successfully ." << endl;

    SparseGraph<double> g4 = SparseGraph<double>(V4, false);
    ReadGraph<SparseGraph<double>, double> readGraph4(g4, filename4);
    cout << filename4 << " load successfully ." << endl;

    cout << endl;

    return 0;
}