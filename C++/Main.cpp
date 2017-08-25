#include <iostream>
#include <cassert>

using namespace std;

class UnionFind {

private:
    int *id;
    int count;

public:
    UnionFind( int n ) {
        count = n;
        id = new int[n];
        for (int i = 0; i < n; i++) {
            id[i] = i;
        }
    }

    ~UnionFind() {
        delete[] id;
    }

    int find( int p ) {
        assert( p >= 0 && p < count);
        return id[p];
    }
};

int main() {
    cout << "Hello wsx" << endl;
    return 0;
}
