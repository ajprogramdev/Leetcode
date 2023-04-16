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

Divide and conquer sorting algorithm, where you pick a pivot and move values left and right.
[Explanation](https://www.youtube.com/watch?v=ceqwscS_muA)

#### Time Complexity

Average O(nlogn)
Worst O(n^2)

#### When to use

To sort a large array.

#### Implementation

```javascript
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let right = [];
  let left = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
```
