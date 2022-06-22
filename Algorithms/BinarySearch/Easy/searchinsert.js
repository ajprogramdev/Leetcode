/*
Given a sorted array of distinct integers and a target value, 
return the index if the target is found. 
If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4
*/

/*
Steps:
1.Create left =0 , right= arr.length-1 and mid variables.
2.Loop while left <= right
3.Set mid = Math.floor((left+right)/2)
4.If the mid = target, return mid
5.If mid < target, left = mid+1;
6.Else right = mid -1;
7.Return left if nothing is found.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    
    let left = 0;
    let right = nums.length-1;
    let mid;
    
    while (left <= right) {     
        mid = Math.floor((left+right)/2);       
        if (nums[mid] === target) {
            return mid;            
        } if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }        
    }   
    return left;    
};
