#include <iostream>
#include <cassert>

using namespace std;

// 第五版Union-Find 路径压缩优化
namespace UF5 {
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
    };
}