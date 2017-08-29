#include <iostream>
#include <cassert>

using namespace std;

// 第四版Union-Find 使用rank优化
namespace UF4 {
    class UnionFind {
        private:
            int* rank; // rank[i]表示以i为根的集合所表示的树的层数
            int* parent; // parent[i]表示第i个元素所指向的父节点
            int count; // 数据个数

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
                // 不断去查询自己的父亲节点, 直到到达根节点
                // 根节点的特点: parent[p] == p
                while (parent[p] != p) {
                    p = parent[p];
                }

                return p;
            }

            bool isConnected( int p, int q ) {
                return parent[p] == parent[q];
            }

            void unionElements( int p, int q ) {
                int pRoot = find(p);
                int qRoot = find(q);

                if (pRoot == qRoot)
                    return;
                
                // 根据两个元素所在树的元素个数不同判断合并方向
                // 将元素个数少的集合合并到元素个数多的集合上
                if (rank[pRoot] < rank[qRoot]) {
                    parent[pRoot] = qRoot;
                } else if (rank[qRoot] < rank[pRoot]) {
                    parent[qRoot] = pRoot;
                } else {
                    parent[pRoot] = qRoot;
                    rank[qRoot] += 1;
                }
            }
    };
}