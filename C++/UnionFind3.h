#include <iostream>
#include <cassert>

namespace UF3 {
    class UnionFind {
        private:
            int* parent;
            int* sz;
            int count;
        
        public:
            UnionFind( int count ) {
                parent = new int[count];
                sz = new int[count];
                this->count = count;

                for (int i = 0; i < count; i++) {
                    parent[i] = i;
                    sz[i] = 1;
                }
            }

            ~UnionFind() {
                delete[] parent;
                delete[] sz;
            }

            int find( int p ) {
                assert( p >= 0 && p < count);
                while (parent[p] != p)
                    p = parent[p];
                
                return p;
            }
    };
}