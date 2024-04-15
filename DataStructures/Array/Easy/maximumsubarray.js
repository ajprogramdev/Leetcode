/*
Given an integer array nums, find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum.
A subarray is a contiguous part of an array.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1

Example 3
Input: nums = [5,4,-1,7,8]
Output: 23
*/


/*
Steps:
1. Check if array empty, return 0.
2. Check if array.length is 1, return the only value.
3. Create sum and max variables, sum starts at array[0], max = sum.
4. Loop through array, start index = 1.
    5. Check if index > sum + index, sum = index;
    6. Else sum = index + sum;
  7. Set max = max > sum, "true" max "false" sum; 
8. return the max.
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {  
    if (nums.length === 0) {
        return 0;
    }  
    if (nums.length === 1) {
        return nums[0];
    }
    
    let sum = nums[0];  
    let max = sum;
    
     for (let i=1; i < nums.length; i++) {
        if (nums[i] < (sum + nums[i])) {
            sum += nums[i];
        } else {
            sum = nums[i];
        }  
         max = max > sum ? max : sum;      
    }    
    return max;
};