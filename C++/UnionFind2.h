#include <iostream>
#include <cassert>

using namespace std;

namespace UF2 {
    class UnionFind2 {
    private:
        int* parent;
        int count;

    public:
        UnionFind2( int count ) {
            parent = new int[count];
            this->count = count;
            for (int i = 0; i < count; i++) {
                parent[i] = i;
            }
        }

        ~UnionFind2() {
            delete[] parent;
        }
        
        int find( int p ) {
            assert( p >= 0 && p < count );
            while (parent[p] != p)
                p = parent[p];
            return p;
        }
    };
}