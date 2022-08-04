/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
    
    let map = {};
    
    if (s.length !== t.length) {
        return false;
    }
    
    for (let i=0; i < s.length; i++) {
        if (s[i] in map) {
            map[s[i]] = map[s[i]] + 1;
        } else {
            map[s[i]] = 1;
        }
    }
    
    for (let i=0; i < t.length; i++) {
        if (t[i] in map) {
            if (map[t[i]] !== 0) {
                    map[t[i]] = map[t[i]] - 1;
            } else {
                return false;
            }           
        } else {
           return false;
        }
    }
    
    return true;
       
};