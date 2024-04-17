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

## #125 ValidPalindrome Easy

### Problem

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Sample Input:\
("A man, a plan, a canal: Panama") => true\
Explanation: "amanaplanacanalpanama" is a palindrome.\
("raceacar") => false\
Explanation: "raceacar" is not a palindrome.

### Techniques

Two Pointer

### Problem solving steps:

1. Create a helper function to verify if if a character is a alphanumeric.
2. Use a while loop to go through the sentence while left < right pointer.
3. Verify left char and right char separately, using helper function.
4. If they both valid, compare, else move the pointers in the characters that arent valid.
5. If a valid characters, compare, if true, move pointers once. If false return false.
6. If the while loop finishes, return true.

### Time Complexity: O(n)

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (sentence) {
  const isAlphanumeric = (char) => {
    if (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') {
      return true;
    }

    if (char >= '0' && char <= '9') {
      return true;
    }

    return false;
  };

  let left = 0;
  let right = sentence.length - 1;
  let isValidComparison = true;

  while (left < right) {
    const leftIsAlpha = isAlphanumeric(sentence[left]);
    const rightIsAlpha = isAlphanumeric(sentence[right]);

    if (!leftIsAlpha) {
      left++;
      isValidComparison = false;
    }
    if (!rightIsAlpha) {
      right--;
      isValidComparison = false;
    }

    if (isValidComparison) {
      if (sentence[left].toLowerCase() === sentence[right].toLowerCase()) {
        left++;
        right--;
      } else {
        return false;
      }
    }

    isValidComparison = true;
  }

  return true;
};
```
