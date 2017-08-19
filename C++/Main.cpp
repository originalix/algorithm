#include <iostream>
#include "SortTestHelper.h"
#include "SelectionSort.h"
#include "InsertionSort.h"
#include "MergeSort.h"
#include "QuickSort.h"
#include "HeapSort.h"

using namespace std;

template <typename Item>
class MaxHeap {

private:
    Item *data;
    int *indexes;
    int *reverse;
    int count;
    int capacity;

    void shiftUp( int k ) {
        while (k > 1 && data[ indexes[k/2] ] < data[ indexes[k] ]) {
            swap( indexes[k/2], indexes[k] );
            reverse[indexes[k / 2]] = k / 2;
            reverse[indexes[k]] = k;
            k /= 2;
        }
    }

    void shiftDown( int k ) {
        while (2*k <= count) {
            int j = 2 * k; // 在此轮循环中,data[k]和data[j]交换位置
            if (j + 1 <= count && data[ indexes[j] ] < data[ indexes[j+1] ])
                // data[j] 是 data[2*k]和data[2*k+1]中的最大值
                j += 1;
            if (data[ indexes[k] ] > data[ indexes[j] ])
                break;
            swap( indexes[k], indexes[j] );
            reverse[ indexes[k] ] = k;
            reverse[ indexes[j] ] = j;
            k = j;
        }
    }

public:
    // 构造函数, 构造一个空堆, 可容纳capacity个元素
    MaxHeap(int capacity) {
        data = new Item[capacity + 1];
        indexes = new int[capacity + 1];
        reverse = new int[capacity + 1];
        for (int i = 0; i <= capacity; i++) {
            reverse[i] = 0;
        }
        count = 0;
        this->capacity = capacity;
    }

    MaxHeap(Item arr[], int n) {
        data = new Item[n+1];
        capacity = n + 1;
        for (int i = 0; i < n; i++)
            data[i+1] = arr[i];
        count = n;
        for (int i = count / 2; i >= 1; i--)
            shiftDown(i);
    }

    ~MaxHeap() {
        delete[] data;
        delete[] indexes;
        delete[] reverse;
    }

    // 返回堆中的元素个数
    int size() {
        return count;
    }

    // 返回一个布尔值, 表示堆中是否为空
    bool isEmpty() {
        return count == 0;
    }

    // 像最大堆中插入一个新的元素 item
    // 传入的i对用户而言，是从0索引的
    void insert(int i, Item item) {
        assert(count + 1 <= capacity);
        assert(i + 1 >= 1 && i + 1 <= capacity);

        i += 1;
        data[i] = item;
        indexes[count+1] = i;
        reverse[i] = count + 1;

        count++;
        shiftUp( count );
    }

    // 从最大堆中取出堆顶元素, 即堆中所存储的最大数据
    Item extractMax() {
        assert(count > 0);

        Item ret = data[ indexes[1] ];

        swap( indexes[1], indexes[count] );
        reverse[ indexes[1] ] = 1;
        reverse[ indexes[count] ] = 0;
        count--;

        shiftDown( 1 );

        return ret;
    }

    int extractMaxIndex() {
        assert( count > 0 );
        int ret = indexes[1] - 1;
        swap( indexes[1], indexes[count] );
        reverse[ indexes[1] ] = 1;
        reverse[ indexes[count] ] = 0;
        count--;
        shiftDown(1);
        return ret;
    }

    bool contain( int i ) {
        assert( i + 1 >= 1 && i + 1 <= capacity);
        return reverse[i+1] != 0;
    }

    Item getItem( int i ) {
        assert(contain[i]);
        return data[i + 1];
    }

    void change( int i, Item newItem ) {

        assert(contain[i]);

        i += 1;
        data[i] = newItem;

        // 找到indexes[j] = i, j 表示 data[i]在堆中的位置
        // 之后shiftUp(j), 再shiftDown(j)
        // for ( int j = 1; j <= count; j++ ) {
        //     if (indexes[j] == i) {
        //         shiftUp(j);
        //         shiftDown(j);
        //         return;
        //     }
        // }

        int j = reverse[i];
        shiftUp(j);
        shiftDown(j);
    }

    // 获取最大堆中的堆顶元素
    Item getMax(){
        assert( count > 0 );
        return data[1];
    }
};

int main() {
    int n = 1000000;
    cout << "Test for Random Array, size = " << n << ", Random range [0, " << n << "]" << endl;
    int *arr1 = SortTestHelper::generateRandomArray(n, 0, 10);
    int *arr2 = SortTestHelper::copyIntArray(arr1, n);
    int *arr3 = SortTestHelper::copyIntArray(arr2, n);
    int *arr4 = SortTestHelper::copyIntArray(arr3, n);
    int *arr5 = SortTestHelper::copyIntArray(arr4, n);
    int *arr6 = SortTestHelper::copyIntArray(arr5, n);
    int *arr7 = SortTestHelper::copyIntArray(arr6, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    // SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, arr1, n);
    SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr5, n);
    SortTestHelper::testSort("heapSort1", heapSort1, arr4, n);
    SortTestHelper::testSort("heapSort2", heapSort2, arr6, n);
    SortTestHelper::testSort("heapSort3", heapSort3, arr7, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;
    delete[] arr4;
    delete[] arr5;
    delete[] arr6;
    delete[] arr7;

    cout<<endl;

    int swapTimes = 1000;
    cout << "Test for Random Nearly Ordered Array, size = " << n << ", swap time = " << swapTimes << ", Random range [0, " << n << "]" << endl;

    arr1 = SortTestHelper::generateNearlyOrderedArray(n, swapTimes);
    arr2 = SortTestHelper::copyIntArray(arr1, n);
    arr3 = SortTestHelper::copyIntArray(arr2, n);
    arr4 = SortTestHelper::copyIntArray(arr3, n);
    arr5 = SortTestHelper::copyIntArray(arr4, n);
    arr6 = SortTestHelper::copyIntArray(arr5, n);
    arr7 = SortTestHelper::copyIntArray(arr6, n);

    // SortTestHelper::testSort("Insertion Sort", insertionSort, arr1, n);
    SortTestHelper::testSort("Merge Sort", mergeSort, arr2, n);
    SortTestHelper::testSort("Merge Sort Bottom UP", mergeSortBU, arr3, n);
    // SortTestHelper::testSort("Quick Sort", quickSort, arr4, n);
    SortTestHelper::testSort("Quick Sort2", quickSort2, arr1, n);
    SortTestHelper::testSort("Quick Sort 3 Ways", quickSort3Ways, arr5, n);
    SortTestHelper::testSort("heapSort1", heapSort1, arr4, n);
    SortTestHelper::testSort("heapSort2", heapSort2, arr6, n);
    SortTestHelper::testSort("heapSort3", heapSort3, arr7, n);

    delete[] arr1;
    delete[] arr2;
    delete[] arr3;
    delete[] arr4;
    delete[] arr5;
    delete[] arr6;
    delete[] arr7;

    cout << "Hello Wsx" << endl;
}
