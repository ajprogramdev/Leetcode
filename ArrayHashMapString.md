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
