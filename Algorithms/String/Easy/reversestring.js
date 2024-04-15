/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/*
Steps:
1. Create start and end variables.
2. While start < end.
    3.Make a copy of the starting index value.
    4.Set s[start] to s[end].
    5.Set s[end] to copy of the start Value.".
6.Return String.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
   
    let start = 0;
    let end = s.length-1;
    
    while ( start < end) {
        let startS = s[start];
        s[start] = s[end];
        s[end] =  startS;        
        end --;
        start++;        
    }   
};