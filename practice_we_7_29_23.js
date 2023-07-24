// #392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by
// deleting some (can be none) of the characters without disturbing the relative positions
//  of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	//check if s's length is greater than t's length; if it is return false
	if (s.length > t.length) {
		return false;
	}
	//check to see if occurences of s in t with a pointer index, counter
    let counter = 0;
    for (let i = 0; i < t.length; i++) {
        //if s at index counter is equal to t and index i, increment the counter
        if (s[counter] === t[i]){
            counter++
        }
    }
    //return/check if true or false (the counter  is equal to s's length)
    return s.length === counter
};
console.log(isSubsequence('axc', 'ahbgdc')) //false
