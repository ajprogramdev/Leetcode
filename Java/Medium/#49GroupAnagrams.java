import java.util.*;
/*
 Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        List<List<String>> theAnagramsGroups = new ArrayList<>();
        HashMap<String, List<String>> map = new HashMap<>();

        for (String value : strs) {
            char[] letters = value.toCharArray();
            Arrays.sort(letters);
            String str = new String(letters);

            if (!map.containsKey(str)) {
                map.put(str, new ArrayList<>());
            }
            map.get(str).add(value);
        }

        theAnagramsGroups.addAll(map.values());
        return theAnagramsGroups;
    }
}