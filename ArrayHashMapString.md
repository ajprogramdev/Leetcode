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

## #242 Valid Anagram Easy

### Problem

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Input: s = "rat", t = "car"
Output: false

Sample Input:\
("anagram", "nagaram") => true\
Explanation: They share the same amount of letters equally.\
("rat", "car") => false\
Explanation: They dont share the same letters.

### Techniques

### Problem solving steps:

1. Create an Map using one of the words as base, count each character.
2. Create a variable to carry the amount of characters the base word has.
3. Loop through the second word, if the characters exist on the Map and not 0, -1 else return false.\
   Lower the character count as they appear.
4. If loop finishes, verify that count is 0 and return true, else false.

### Time Complexity: O(n)

```javascript
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const charObj = {};
  let charCount = 0;

  for (let i = 0; i < s.length; i++) {
    charObj[s[i]] = charObj.hasOwnProperty(s[i]) ? charObj[s[i]] + 1 : 1;
    charCount++;
  }

  for (let i = 0; i < t.length; i++) {
    if (charObj.hasOwnProperty(t[i]) && charObj[t[i]] >= 1) {
      charObj[t[i]] = charObj[t[i]] - 1;
      charCount--;
    } else {
      return false;
    }
  }

  if (charCount === 0) {
    return true;
  }

  return false;
};
```

## #121 Best Time to Buy and Sell Stock

### Problem

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Sample Input:\
([7,1,5,3,6,4]) => 5\
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.\
([7,6,4,3,1]) => 0\
Explanation: NO profit.

### Techniques

Sliding Window

### Problem solving steps:

1. Create a maxProfit and left and right pointers.
2. Use a while loop to go through the prices array while left < right pointer.
3. Compare left and right prices , change left to right if right price is smaller.
4. Calculate profit and compare with maxProfit, set maxProfit to highest value.
5. Increase right pointer on every iteration.
6. Return maxProfit.

### Time Complexity: O(n)

```javascript
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let left = 0;
  let right = 1;

  while (left < right && right <= prices.length - 1) {
    if (prices[left] > prices[right]) {
      left = right;
    } else {
      const profit = prices[right] - prices[left];
      maxProfit = Math.max(maxProfit, profit);
    }
    right++;
  }

  return maxProfit;
};
```

## #167 TwoSum 2 - Input Array Is Sorted

### Problem

Given an array of integers nums and an integer target, return
indeces of the two numbers such that they add up to target.\
Sample Input:\
([2,7,11,15], 9) => [1,2]\
Because 2 + 7 = 9.

### Techniques

Two Pointer

### Problem solving steps:

### Time Complexity: O(n)

```javascript
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumSorted = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    const complement = numbers[left] + numbers[right];
    if (complement === target) {
      return [left + 1, right + 1];
    }

    if (complement >= target) {
      right--;
    } else if (complement <= target) {
      left++;
    }
  }

  return [-1, -1];
};
```

## #217 Contains Duplicate

### Problem

Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.

Sample Input:\
([1,2,3,1]) => true\
([1,2,3,4]) => false\

### Techniques

Hashmap

### Problem solving steps:

1. Create a map or set to track values as they appear.
2. Loop through the nums array, check if value exists.
3. If it doest return true.
4. Else add the value to the map as key or just add the value if using a set.
5. If loop ends it means there are no duplicates, return false.

### Time Complexity: O(n)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(nums[i])) {
      return true;
    }
    map[nums[i]] = i;
  }

  return false;
};
```

## #347 Top K frequency element.

### Problem

Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

Sample Input:\
([1,1,1,2,2,3], 2) => [1,2]\
([1], 1) => [1]\

### Techniques

Hashmap

### Problem solving steps:

### Time Complexity: O(n log n)

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const frequency = {};

  for (let i = 0; i < nums.length; i++) {
    frequency[nums[i]] = frequency.hasOwnProperty(nums[i])
      ? frequency[nums[i]] + 1
      : 1;
  }

  const frequencyArr = Object.keys(frequency).map((key) => {
    return [Number(key), frequency[key]];
  });

  const sortedFrequency = frequencyArr.sort((a, b) => {
    return b[1] - a[1];
  });

  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(sortedFrequency[i][0]);
  }

  return output;
};
```

## #3 Longest substring without repeating characters.

### Problem

Given a string s, find the length of the longest substring without repeating characters.

Sample Input:\
("abcabcbb") => 3\
("bbbbb") => 1\
("pwwkew") => 3\

### Techniques

Sliding Window

### Problem solving steps:

1. Create left and right pointer.
2. Create a variable to track largest string.
3. Create a map or set to track letters as they appear.
4. Loop through the word while right pointer is less than length of the string.
5. Check in the map if the property exist using the right pointer, if it does delete the the value of the first pointer that move
   the pointer on the left once.
6. else add the value, compare max and set to new max, increase right by 1.
7. When loop ends return max.

### Time Complexity: O(n)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let right = 0;
  let max = 0;
  let letters = {};

  while (right < s.length) {
    if (letters.hasOwnProperty(s[right])) {
      delete letters[s[left]];
      left = left + 1;
    } else {
      letters[s[right]] = right;
      max = Math.max(Object.keys(letters).length, max);
      right++;
    }
  }
  return max;
};
```

## #704 Binary Search

### Problem

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Sample Input:\
([-1,0,3,5,9,12],9) => 4\
([-1,0,3,5,9,12],2) => -1

### Techniques

Binary Search

### Problem solving steps:

### Time Complexity: O(log n )

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
};
```

## #238 Product of Array Except Self

### Problem

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Sample Input:\
([1,2,3,4]) => [24,12,8,6]\
([-1,1,0,-3,3]) => [0,0,9,0,0]

### Techniques

### Problem solving steps:

1. Create a results array.
2. Push 1 to every position in the array.
3. Create a prefix = 1
4. Loop through nums, on each iteration
   result[index] = prefix and
   prefix = prefix \* nums[index]
5. Create a postfix=1;
6. Loop though nums again but this time,result = postfix \* result[i] and
   postfix = postfix \* nums[index]
7. return result.

### Time Complexity: O(n)

```javascript
/**
 * @param {number[]} nums
 * @return {number[]} nums
 */
var productExceptSelf = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(1);
  }

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix = prefix * nums[i];
  }

  let postfix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = postfix * result[i];
    postfix = postfix * nums[i];
  }

  return result;
};
```
