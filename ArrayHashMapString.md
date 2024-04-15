## #1 TwoSum Easy

### Problem

Given an array of integers nums and an integer target, return
indeces of the two numbers such that they add up to target.\
Sample Input:\
([2,7,11,15], 9) => [0,1]\
Because 2 + 7 = 9.

### Techniques

### Problem solving steps:

1. Create a map to track the values as they appear.
2. Loop through the array.
3. compliment = target - val[index]
4. Check if compliment exists on the map, if it does return
   [map[compliment], currentIndex].
5. Else just add the current value to map as key with current index as value.

### Time Complexity: O(n)

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.hasOwnProperty(complement)) {
      return [i, map[complement]];
    }

    map[nums[i]] = i;
  }

  return [-1, -1];
};
```
