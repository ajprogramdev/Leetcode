/*
Given a string s, find the first non-repeating character in it and return its index. 
If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
*/

/*
Steps:
1.Create a hashmap or (object literal), to track how many times a value appears.
2.Loop through the string, set hashmap[string[i]] = (hashmap[i] + 1) if it exists, (1) if first time appearing.   
3.Loop through the string again, if hashmap[string[i]] === 1, 
return when u find the first key where the value = 1.
4.If no value is found, return -1.
*/
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    
    let hashmap = {};

    for (let i=0; i < s.length; i++) {
       hashmap[s[i]] =  hashmap[s[i]] == undefined ?  1 : hashmap[s[i]] + 1;         
    }
    
    for (let i=0; i < s.length; i++) {
       if (hashmap[s[i]] === 1){
           return i;
       }         
    }
    
    return -1;           
}