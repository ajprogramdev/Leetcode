/*
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
*/

/*
Steps:
1. First sort the numbers.
2. Loop through the numbers, and check in first and second pairs.
    3. If they are equal, i + 1 the index.
    4. Else return value in index i.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    nums.sort();
    for (let i=0; i < nums.length; i++) {
        if (nums[i] == nums[i+1]) {
            i++; 
        } else {
            return nums[i]
        }
    }
};