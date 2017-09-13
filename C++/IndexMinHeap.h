#include <iostream>
#include <algorithm>
#include <cassert>

using namespace std;

template <typename Item>
class IndexMinHeap {
private:
    Item *data;    // 最小索引堆中的数据
    int *indexes;  // 最小索引堆中的索引，index[x] = i 表示索引i在x的位置
    int *reverse;  // 最小索引堆中的反向索引，reverse[i] = x 表示索引i在x的位置

    int count;     // 最小索引堆当前元素个数
    int capacity;  // 最小索引堆的空间大小
};