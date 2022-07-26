/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of 
the characters without disturbing the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    
    if (s.length === 0) {
        return true;
    }
        
    let sPointer = 0;
    let tPointer = 0;
    
    while (tPointer < t.length) {       
        if (s[sPointer] === t[tPointer]) {           
            sPointer++;
            if (sPointer === s.length){
                return true;
            }           
        }
            
        tPointer++;
    }

    return false;        
};