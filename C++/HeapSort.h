#include <iostream>
#include "Heap.h"

using namespace std;

// heapSort1, 将所有的元素依次添加到堆中, 在将所有元素从堆中依次取出来, 即完成了排序
// 无论是创建堆的过程, 还是从堆中依次取出元素的过程, 时间复杂度均为O(nlogn)
// 整个堆排序的整体时间复杂度为O(nlogn)
template<typename T>
void heapSort1(T arr[], int n) {
    MaxHeap<T> maxheap = MaxHeap<T>(n);
    for (int i = 0; i < n; i++) {
        maxheap.insert(arr[i]);
    }

    for (int i = n - 1; i >= 0; i--) {
        arr[i] = maxheap.extractMax();
    }
}

// heapSort2, 借助我们的heapify过程创建堆
// 此时, 创建堆的过程时间复杂度为O(n), 将所有元素依次从堆中取出来, 实践复杂度为O(nlogn)
// 堆排序的总体时间复杂度依然是O(nlogn), 但是比上述heapSort1性能更优, 因为创建堆的性能更优
template<typename T>
void heapSort2(T arr[], int n) {
    MaxHeap<T> maxheap = MaxHeap<T>(arr, n);
    for (int i = n - 1; i >= 0; i--) {
        arr[i] = maxheap.extractMax();
    }
}

/******************   原地堆排序  ************************/
template<typename T>
void __shiftDown(T arr[], int n, int k) {
    while (2*k+1 < n) {
        int j = 2*k+1; // 在此轮循环中,arr[k]和arr[j]交换位置
        if (j + 1 < n && arr[j] < arr[j+1])
            // data[j] 是 data[2*k]和data[2*k+1]中的最大值
            j += 1;
        if (arr[k] >= arr[j])
            break;
        swap( arr[k], arr[j] );
        k = j;
    }
}

template<typename T>
void heapSort3(T arr[], int n) {
    for (int i = (n-1) / 2; i >= 0; i--) {
        __shiftDown(arr, n, i);
    }

    for (int i = n-1; i > 0; i--) {
        swap( arr[0], arr[i] );
        __shiftDown(arr, i, 0);
    }
}
