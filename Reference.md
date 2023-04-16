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
When a list of values is sorted.

#### Implementation

 ```
function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === val) {
      return mid;
    }

    if (val < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
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
