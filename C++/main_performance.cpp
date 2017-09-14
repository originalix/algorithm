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

    clock_t startTime, endTime;

    cout << "Test Lazy Prim MST: " << endl;

    startTime = clock();
    LazyPrimMST<SparseGraph<double>, double> lazyPrimMST(g1);
    endTime = clock();
    cout<<"Test for G1: "<<(double)(endTime-startTime)/CLOCKS_PER_SEC<<" s."<<endl;

    startTime = clock();
    LazyPrimMST<SparseGraph<double>, double> lazyPrimMST2(g2);
    endTime = clock();
    cout<<"Test for G2: "<<(double)(endTime-startTime)/CLOCKS_PER_SEC<<" s."<<endl;

    startTime = clock();
    LazyPrimMST<SparseGraph<double>, double> lazyPrimMST3(g3);
    endTime = clock();
    cout<<"Test for G3: "<<(double)(endTime-startTime)/CLOCKS_PER_SEC<<" s."<<endl;

    startTime = clock();
    LazyPrimMST<SparseGraph<double>, double> lazyPrimMST4(g4);
    endTime = clock();
    cout<<"Test for G4: "<<(double)(endTime-startTime)/CLOCKS_PER_SEC<<" s."<<endl;    
    
    cout << endl;

    // Test Prim MST
    cout<<"Test Prim MST:"<<endl;
    
    startTime = clock();
    PrimMST<SparseGraph<double>, double> PrimMST1(g1);
    endTime = clock();
    cout<<"Test for G1: "<<(double)(endTime-startTime)/CLOCKS_PER_SEC<<" s."<<endl;

    startTime = clock();
    PrimMST<SparseGraph<double>, double> PrimMST2(g2);
    endTime = clock();
    cout<<"Test for G2: "<<(double)(endTime-startTime)/CLOCKS_PER_SEC<<" s."<<endl;

    startTime = clock();
    PrimMST<SparseGraph<double>, double> PrimMST3(g3);
    endTime = clock();
    cout<<"Test for G3: "<<(double)(endTime-startTime)/CLOCKS_PER_SEC<<" s."<<endl;

    startTime = clock();
    PrimMST<SparseGraph<double>, double> PrimMST4(g4);
    endTime = clock();
    cout<<"Test for G4: "<<(double)(endTime-startTime)/CLOCKS_PER_SEC<<" s."<<endl;

    cout<<endl;

    return 0;
}