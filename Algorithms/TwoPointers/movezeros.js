/*
Given an integer array nums, move all 0's to the end of it while maintaining
the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]
*/

/*
Steps:
1.Track the arrays length.
2.Loop thorough area.
    3.IF index = 0, splice it, push to the end.
        4.length-- (the end is 0 so we dont need to reach the end),
            i-- so you verify the new index again.
*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    
    let length = nums.length;
    for (let i=0; i < length; i++) {      
        if (nums[i] == 0) {
            nums.splice(i, 1);
            nums.push(0);
            length--;
            i--;
        }        
    }        
};