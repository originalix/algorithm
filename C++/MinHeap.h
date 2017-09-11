#ifndef MINHEAP_H
#define MINHEAP_H

#include <algorithm>
#include <cassert>

using namespace std;

// 最小堆
template <typename Item>
class MinHeap {
private:
    Item *data;
    int count;
    int capacity;

public:
    // 构造函数，构造一个空堆，可容纳capacity个元素f
    MinHeap(int capacity) {
        data = new Item[capacity + 1];
        count = 0;
        this->capacity = capacity;
    }
};

#endif