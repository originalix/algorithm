#include <iostream>

using namespace std;

template<typename T>
void binarySearch(T arr[], int n, int target) {
    int l = 0, r = n - 1;
    while(l <= r) {
        int mid = l + (r - l) / 2;
        if (arr[mid] == target)
            return mid;
        if (arr[mid] < target)
            r = mid - 1;
        if (arr[mid] > target)
            l = mid + 1;
    }

    return -1;
}

template<typename Key, typename Value>
class BST {

private:
    struct Node {
        Key key,
        Value value,
        int left,
        int right,

        Node(Key key, Value value) {
            this->key = key;
            this->value = value;
            this->left = this->right = NULL;
        }

        Node *root;
        int count;
    };
public:
    BST() {
        root = NULL;
        count = 0;
    }

    ~BST() {
        // TODO:
    }

    int size() {
        return count;
    }

    int isEmpty() {
        return count == 0;
    }
};

int main() {
}
