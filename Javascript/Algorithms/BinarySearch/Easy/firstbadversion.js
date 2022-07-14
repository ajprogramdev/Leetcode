/*
You are a product manager and currently leading a team to develop a new product.
Unfortunately, the latest version of your product fails the quality check. 
Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which returns whether version is bad. 
Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example 1:
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

Example 2:
Input: n = 1, bad = 1
Output: 1
*/

/*
1.Create Left = 0 and right = n variable.
2.Create mid which will be left + right / 2.
3.Get version mid.
4.Check if its opposite of the next one version !== nextvalue.
    If opposie, it was the last false value. return mid+1
5.Else if version is false, left  = mid+1.
6.Else right = mid-1
*/


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let right = n; 
        let left = 0;
        let mid;
        
        while (left <= right) {
            mid = Math.floor((left+right)/2);
            let version = isBadVersion(mid);
            if (version !== isBadVersion(mid+1)) {
                return mid+1;
            } else if (version === false) {
                left = mid + 1;
            } else {
                right = mid - 1
            }           
        }
        
    };
};