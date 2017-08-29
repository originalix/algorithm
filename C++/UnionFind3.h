#include <iostream>
#include <cassert>

// 第三版Union-Find 使用sz数组优化
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

            bool isConnected( int p, int q ) {
                return find(p) == find(q);
            }

            void unionElements( int p, int q ) {
                int pRoot = find(p);
                int qRoot = find(q);

                if (pRoot == qRoot)
                    return;
                
                if (sz[pRoot] < sz[qRoot]) {
                    parent[pRoot] = qRoot;
                    sz[qRoot] += sz[pRoot];
                } else {
                    parent[qRoot] = pRoot;
                    sz[pRoot] += sz[qRoot];
                }
            }
    };
}