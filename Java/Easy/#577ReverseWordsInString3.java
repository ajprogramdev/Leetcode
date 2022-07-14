/*
Given a string s, reverse the order of characters in each word within a sentence 
while still preserving whitespace and initial word order.

Example 1:
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Example 2:
Input: s = "God Ding"
Output: "doG gniD" 
*/

class Solution {
    public String reverseWords(String s) {
        String[] toBeReverse = s.split(" ");
        String reversedStr = "";
        for (int i = 0; i < toBeReverse.length; i++) {
            reversedStr += new StringBuilder(toBeReverse[i]).reverse().toString();
            if (i < toBeReverse.length - 1) {
                reversedStr += " ";
            }
        }

        return reversedStr;
    }
}