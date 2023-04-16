# Data Structures

## Arrays

### Time complexity

### When to use

## LinkedList

### Time Complexity

### When to use

### Implementation

## HashMap

### Time Complexity

### When to use

### Implementation

# Algorithms

## Searching

### Binary Search

#### Time Complexity
O(log n)

#### When to use
Searching for a value in a sorted list.

#### Implementation

 ```javascript
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

```
## Sorting

### Quick Sort

#### Time Complexity

#### When to use

#### Implementation
