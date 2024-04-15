/*
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

/*
Steps:
1.Create a map.
2.Loop through Array
    3.If num in map: return true;
    4.If num not in map: add array num to map.
5.Since the Loop finish and no number was repeated: return false;
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    
    let map = {};
    
    for(let i=0; i < nums.length; i++) {
        if (nums[i] in map) {
            return true;
        } else {
            map[nums[i]] = i;
        }
    }
    
    return false;      
};

/*
Other Solutions:
-A Set is a datastructure that stores unique values.
- Create a (set) of the array.
    -if (set.length == array.length): return false;
    -else return true;

*/