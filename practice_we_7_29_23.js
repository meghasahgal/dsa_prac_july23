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

// A word is a maximal substring consisting of non-space characters only.
// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLastWord = function (s) {
// 	//remove additionalp spaces with regex
// 	//The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
// 	newString = s.trim();
// 	let changed = newString.split(" ");
// 	let last = changed.length - 1;
// 	return changed[last].length;
// };

// // console.log(lengthOfLastWord("   fly me   to   the moon  ")); //4

// //#136. Single Number

// Companies
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
// var singleNumber = function (nums) {
// 	//edge case if there's only 1 number in the array
// 	if (nums.length === 1) {
// 		return nums[0];
// 	}
// 	//sort in ascending aorder
// 	nums.sort((a, b) => a - b);
// 	for (let i = 0; i < nums.length; i++) {
// 		//check to see if the prev and next numbers are not the same
// 		if (nums[i] !== nums[i + 1]) {
// 			//if not return nums[i]
// 			return nums[i];
// 		} else {
// 			i++;
// 		}
// 	}
// };

// #268. Missing Number

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
// var missingNumber = function (nums) {
//    nums.sort((a, b) => a-b);
//    console.log(nums, "nums")

//     for(var i=0; i < nums.length; i++){
//        //missing number should be the same as the index val when sorted
//         if( i !== nums[i]) return i;
//         console.log(i, "i")
//         console.log(nums[i], "nums[i]")
//     }
//     console.log(nums.length, "length")
//     return nums.length;
// }
// console.log(nums[1,3]) //2

//
// # 7. Reverse Integer
// Medium

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// // Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function (x) {
// 	const minInteger = Math.pow(-2, 31);
// 	const maxInteger = Math.pow(2, 31) - 1;

// 	//reverse the chars by changing the num to a string and then an array so that we can reverse and join the words
// 	const reversed = x.toString().split('').reverse().join("");
//     console.log(reversed, "reversed")
// 	//check for vals
// 	if (x < 0) {
// 		//duplicate the array and change it back to a number
// 		const result = Number(`-${reversed.slice(0, reversed.length-1)}`);
//         console.log(result, "result1")
// 		// If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
// 		return result < minInteger ? 0 : result;
// 	}
// 	// if x > 0
// 	else {
// 		const result = Number(reversed);
//         console.log(result, "result2");

// 		return result > maxInteger ? 0 : result;
// 	}
// };

// console.log(reverse(321)) //123


// 169. Majority Element

// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.
/**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//     //find n = length

//     let n = nums.length
//     let majority = Math.floor(n/2)
//     let res = {}
//     //count w/ obj
//     for(let i = 0; i < n; i++){
//         // if nums[i] exists, increment the count
//       if(res[nums[i]]){
//         res[nums[i]]++
//       }
//       // else set count to 1
//       else {
//         res[nums[i]] = 1
//       }
//       //check if nums[i] is greater than the majority and resturn nums[i], the number, if it is
//       if(res[nums[i]] > majority){
//         return nums[i]
//       }
//     }
// };

// 189. Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// /**
// //  * @param {number[]} nums
// //  * @param {number} k
// //  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var rotate = function(nums, k) {
//    if(k < nums.length){
//        // take out the k number of nums
//        const shaved = nums.splice(nums.length-k)
//     //    console.log(shaved, "shaved")
//        // place them in the front of the array
//        nums.unshift(...shaved)
//     //    console.log(nums, "nums")

//    }
//    if (k > nums.length){
//        // take out the remainder of the nums
//        const shaved = nums.splice(nums.length - (k % nums.length))
//         //place them in the front of the array
//         nums.unshift(...shaved)

//    }

// };

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
// #605 - CanPlaceFlowers
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
// return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// var canPlaceFlowers = function(flowerbed, n) {
//     // return false if [1,1,1] (space, before and after space is 1)
//     // return true if count >= number of flowers
//     // create a count
//     let count = 0;
//     for (let i = 0; i < flowerbed.length; i++){
//         if(!flowerbed[i-1] && !flowerbed[i+1] && !flowerbed[i]){
//             console.log(flowerbed[i-1]);
//             console.log(flowerbed[i+1]);
//             console.log(flowerbed[i]);
//             flowerbed[i] = 1;
//             count++
//         }
//     }
//     return count >=n
// };
// console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); //true
// console.log(canPlaceFlowers([1,0,0,0,1], n = 2)); //false


// var plusOne = function(digits) {
//     let lastindex = digits.length-1
//     //check for edge case where last number is not equal to 9, if not, icrement it by 1
//     if(digits[lastindex]!==9){
//         digits[lastindex]++
//     }
//     else{
//         //while last digit is equal to 9, set it to 0 and; need to decrement the last index to check for additional 9s
//         while(digits[lastindex] ===9){
//             digits[lastindex] = 0;
//             lastindex--
//             console.log(lastindex, "lastindex")
//         }
//         if(lastindex <0 ){
//             //if last index is < 0, add 1 by unshifting
//             digits.unshift(1)
//             console.log(digits.unshift(1), "unshifted digits")
//         }
//         else {
//             digits[lastindex]++
//             console.log(digits[lastindex], "digits[lastindex]")
//         }
//     }
//     return digits
// };

// console.log(plusOne([9,9])) //[1,0,0]


// 2784. Check if Array is Good

// You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].

// base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once, plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].

// Return true if the given array is good, otherwise return false.

// Note: A permutation of integers represents an arrangement of these numbers.
// *
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var isGood = function(nums) {
//     //sort the nums arr
//     let sorted = nums.sort((a, b)=> a-b)
//     console.log(sorted, "sorted")
//     //get last number called last
//     let last = nums[nums.length-1]
//     //return false if last number + 1 is not equal to the length
//     if(last + 1 !== nums.length) return false

//     //iterate through arr until the last number to see if nums[i] is equal to i+1 (sorted already)
//     for (let i = 0; i < last; i++){
//         if(nums[i] !== i+1){
//             return false
//         }
//     }
// return true;
// }


//______
// #110 Balanced Binary Tree - Given a binary tree, determine if it is height-balanced.


 //helper function to get the height

// const height = (node) => {
//         //if no node return a height of zero
//         if(node === null){
//             return 0;
//         }
//         // return the max height of the left and right nodes + 1
//         return 1 + Math.max(height(node.left), height(node.right))
//     }
// // recursive DFS sol
// var isBalanced = function(root) {
//     if(root === null){
//         return true;
//     }
//     else {
//         let difference = Math.abs(height(root.left) - height(root.right))
//         //return true or false depending on if the difference is < 2 (exactly 1)
//         return difference < 2
//         && isBalanced(root.left)
//         && isBalanced(root.right)
//     }


// };


// 383. Ransom Note

// Companies
// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// // Each letter in magazine can only be used once in ransomNote.
// var canConstruct = function(ransomNote, magazine) {
//   for (let char of magazine){
//       //replace char in ransomNote with an empty string if char is found in it
//       ransomNote = ransomNote.replace(char, "")
//   }
//     //if ransomNote is an empty string, return true, else false
//     return (!ransomNote)
// };

// console.log(canConstruct("aa", "aab"))//true


// #424 Longest Repeating Character
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
   //use a hash to get counts; used to transform a given key into a specific slot index. it is used to map each and every possible key into a unique slot index.
   // use two pointers for right and left
   let hash = {};
   let res = 0;
   let left = 0;
   let max = 0;

   for(let right = 0; right < s.length; right++){
     //if char exists, add 1, else assign to 1
     if(hash[s[right]]) {
       hash[s[right]]++
     }
     else{
       hash[s[right]] = 1;

     }
     console.log(right, "right")
     console.log(hash[s[right]], "hash key as s at right")
     // max is maxiumn of the max and current hash of the key at the s's right index
       max = Math.max(max, hash[s[right]])
       console.log(max, "max between max and the key at the right index")

       while (right - left +1 - max > k){
         hash[s[left]]--;
         left++
       }
       res=Math.max(res, right-left+1)
       console.log(res, "res")
       console.log(left, "left")

   }
   return res;


};

console.log(characterReplacement("AABABBA", 1));
//another sol
// const characterReplacement = (s, k) => {
// 	const map = {};
// 	let max = 0; // max window
// 	let maxCount = 0; // count of most frequent element

// 	let L = 0;
// 	let R = 0;

// 	while (R < s.length) {
// 		const cv = s[R];

// 		map[cv] = map[cv] + 1 || 1; // add/update count
// 		maxCount = Math.max(maxCount, map[cv]); // update max count

// 		// length of window -- count of most frequent > k
// 		// character replacement threshold is capped
// 		while (R - L + 1 - maxCount > k) {
// 			map[s[L]]--; // decrement count of left most character
// 			L++; // move window
// 		}

// 		max = Math.max(max, R - L + 1);
// 		R++;
// 	}

// 	return max;
// };


// #35 Search Insert Position
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var searchInsert = function(nums, target) {
//   //establish a count var for the secondary case if the target doesn't exist
//     let count = 0
//     for (let i = 0; i < nums.length; i++){
//         if(nums[i]===target){
//             return i
//         }
//         else {
//           //check if the num is less than the target -- if it is, the count is incremented and will be one less
//             if(nums[i] < target){
//                 count++
//             }
//         }
//     }
//     return count
// };

// #112. Path Sum
// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// // A leaf is a node with no children.

// var hasPathSum = function (root, targetSum) {
// 	//if no root, return false
// 	if (!root) return false;
// 	//return false if target sum is reached (target sum - root.val = 0)
// 	if (targetSum - root.val === 0 && root.right == null && root.left == null)
// 		return true;
// 	//recursion

// 	return (
// 		hasPathSum(root.left, targetSum - root.val) ||
// 		hasPathSum(root.right, targetSum - root.val)
// 	);
// };
// console.log(hasPathSum([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]), 22);//true

// #94. Binary Tree Inorder Traversal

// Given the root of a binary tree, return the inorder traversal of its nodes' values.



// var inorderTraversal = function (root) {
// 	let res = [];
//   // recursive function
// 	function order(root) {
// 		if (!root) {
// 			return;
// 		}
// 		//recursive calls for left and right nodes
// 		order(root.left);
// 		res.push(root.val);
// 		order(root.right);
// 	}

// 	// call the recursive function
// 	order(root);
// 	return res;
// };


// 100. Same Tree

// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


var isSameTree = function (p, q) {
	return JSON.stringify(p) === JSON.stringify(q);
};

console.log(isSameTree([1, 2, 3], [1, 2, 3]));//true
