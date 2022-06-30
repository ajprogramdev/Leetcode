/*
Given a string s, reverse the order of characters in each word within a 
sentence while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD"
*/

/*
Steps:
1.Split the string sentence into an array.
2.Loop through the array of words. 
    3.For each word, loop backwords.
        4.Create an empty String variable to track the letters of the word in reverse order.       
    5.Set the current words index value to the string varible with the word reversed.
6.Create a reverseSentence variable, to put together all the words and add spaces.
7.Loop through the array of reversed words, add the word and space to reverseSentence 
when the array.length > 2 and not at the end of the array. Else just add the word.
8.Return reversedsentence varible. 
*/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
       
    let splitString = s.split(' ');
        
    for (let i=0; i < splitString.length; i++) {                     
        let str = "";  
        for (let x= splitString[i].length -1; x >= 0; x--) {
            str += splitString[i][x];
        }
        splitString[i] = str;     
    }
    
    let reversedSentence = "";
    for(let i=0; i < splitString.length; i++) {        
     reversedSentence += 
      (i === 0 && splitString.length > 2 || i !== splitString.length-1) 
        ? `${splitString[i]} `: splitString[i];                                
    }
        
    return reversedSentence;        
};
