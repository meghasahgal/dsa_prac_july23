// #392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by
// deleting some (can be none) of the characters without disturbing the relative positions
//  of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {boolean}
//  */
// var isSubsequence = function (s, t) {
// 	//check if s's length is greater than t's length; if it is return false
// 	if (s.length > t.length) {
// 		return false;
// 	}
// 	//check to see if occurences of s in t with a pointer index, counter
//     let counter = 0;
//     for (let i = 0; i < t.length; i++) {
//         //if s at index counter is equal to t and index i, increment the counter
//         if (s[counter] === t[i]){
//             counter++
//         }
//     }
//     //return/check if true or false (the counter  is equal to s's length)
//     return s.length === counter
// };
// console.log(isSubsequence('axc', 'ahbgdc')) //false

// #19. Remove Nth Node From End of List

// Given the head of a linked list, remove the nth node from the end of the list and return its head.
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */

// var removeNthFromEnd = function (head, n) {
// 	//create a dummy node pointer for node before the head node (use dummy in adding or deleting a node)
// 	let dummyHead = new ListNode(-1);
//     console.log(dummyHead, "dummyHead")
// 	// create a head node
// 	dummyHead.next = head;
// 	let resultHead = dummyHead;
//     console.log(resultHead, "resultHead")
// 	//create a counter to find the correct nth node
// 	let counter = 0;
//     //create a tail poiinter that's set to the head
// 	let tail = head;
//     console.log(tail, "tail")
// 	while (counter < n) {
//         counter++
// 		//increment the tail while counter < n
// 		tail = tail.next;
// 	}
//     //create a removedNode pointer that's set to head as well. when you get to n, remove the head
// 	let removedNode = head;
// 	let prev = dummyHead;
//     //increment 3 pointers until tail = null and see where it lands
// 	while (tail) {
// 		tail = tail.next;
//         removedNode = removedNode.next;
//         prev = prev.next;
// 	}
//     prev.next = removedNode.next;
//     return resultHead.next;
// };
// //time complex: O(n);space O(1)

// console.log(removeNthFromEnd([1, 2, 3, 4, 5], 2));
// //--------
// // #56. Merge Intervals

// // Companies
// // Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals,
// // and return an array of the non-overlapping intervals that cover all the intervals in the input.
// /**
//  * @param {number[][]} intervals
//  * @return {number[][]}
//  */
// var merge = function(intervals) {

// };

/**

// var merge = function(intervals) {


// };


//#58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	//remove additional spaces with regex
	//The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
	newString = s.trim();
	let changed = newString.split(" ");
	let last = changed.length - 1;
	return changed[last].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4
