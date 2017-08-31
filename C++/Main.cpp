#include <iostream>
#include "SparseGraph.h"
#include "DenseGraph.h"
#include "ReadGraph.h"
#include "Component.h"

using namespace std;

int main() {
    cout << "Hello wsx" << endl;

    string filename = "testG1.txt";
    SparseGraph g1(13, false);
    ReadGraph<SparseGraph> readGraph1( g1, filename );
    Component<SparseGraph> component1(g1);
    cout << "test G1 in Sparse Graph:" << endl;
    cout<<"TestG1.txt, Component Count: "<<component1.count()<<endl;

    g1.show();

    cout << endl;

    DenseGraph g2(13, false);
    ReadGraph<DenseGraph> readGraph2( g2, filename );
    Component<DenseGraph> component2(g2);
    cout << "test G2 in Dense Graph:" << endl;
    cout<<"TestG1.txt, Component Count: "<<component2.count()<<endl;
    g2.show();

    cout << endl;

    filename = "testG2.txt";
    SparseGraph g3(7, false);
    ReadGraph<SparseGraph> readGraph3( g3, filename );
    Component<SparseGraph> component3(g3);
    cout << "test G2 in Sparse Graph:" << endl;
    cout<<"TestG2.txt, Component Count: "<<component3.count()<<endl;

    g3.show();

    cout << endl;

    DenseGraph g4(7, false);
    ReadGraph<DenseGraph> readGraph4( g4, filename );
    Component<DenseGraph> component4(g4);
    cout << "test G2 in Dense Graph:" << endl;
    cout<<"TestG1.txt, Component Count: "<<component4.count()<<endl;
    g2.show();

    cout << endl;

    return 0;
}
 