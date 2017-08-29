#include <iostream>
#include <cassert>

using namespace std;

namespace UF4 {
    class UnionFind {
        private:
            int* rank;
            int* parent;
            int count;

        public:
            UnionFind( int count ) {
                parent = new int[count];
                rank = new int[count];
                this->count = count;

                for (int i = 0; i < count; i++) {
                    parent[i] = i;
                    rank[i] = 1;
                }
            }

            ~UnionFind() {
                delete[] parent;
                delete[] rank;
            }

            int find( int p ) {
                assert( p >= 0 && p < count );
                return parent[p];
            }

            bool isConnected( int p, int q ) {
                return parent[p] == parent[q];
            }

            
    };
}