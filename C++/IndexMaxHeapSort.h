#include <iostream>

using namespace std;

template<typename T>
void heapSortUsingIndexMaxHeap(T arr[], int n) {
    IndexMaxHeap<T> indexMaxHeap = IndexMaxHeap<T>(n);
    for (int i = 0; i < n; i++) {
        indexMaxHeap.insert(i, arr[i]);
    }

    assert( indexMaxHeap.testIndexesAndReverseIndexes() );

    for (int i = n - 1; i >= 0; i--) {
        arr[i] = indexMaxHeap.extractMax();
    }
}
