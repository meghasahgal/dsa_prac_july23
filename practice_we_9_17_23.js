// //Last Stone Weight
// var lastStoneWeight = function(stones) {
//     while(stones.length > 1){
//         stones.sort((a,b) => a-b)
//         if(stones[stones.length-1] - stones[stones.length-2]===0){
//             stones.pop()
//             stones.pop()
//         }
//         else if(stones[stones.length-1] - stones[stones.length -2] !== 0){
//             //reassign second to last
//             stones[stones.length-2] = stones[stones.length-1] - stones[stones.length-2]
//             //pop off the last
//             stones.pop()
//         }
//     }
//     return stones
// };
// // #1051 Height Checker
// var heightChecker = function(heights) {
//     let count = 0
//     // console.log([...heights], "spread out heights")
//     const sorted = [...heights].sort((a,b) => a-b)
//     console.log(sorted, "sorted")
//     for(let i = 0; i < heights.length; i++){
//         if(sorted[i]!==heights[i]){
//             console.log(sorted[i], "sorted[i")
//             count++
//         }
//     }
//     return count
// };

// console.log(heightChecker([1,1,4,2,1,3])) //3

// //1071. Greatest Common Divisor of Strings

// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// var gcdOfStrings = function (str1, str2) {
// 	// if two strings have a common divider, the combination of the two strings should be equal

// 	if (str1 + str2 !== str2 + str1) {
// 		return "";
// 	}
// 	//recursive function
// 	const gcd = (a, b) => {
// 		if (!b) {
// 			return a;
// 		}

// 		return gcd(b, a % b);
// 	};
// 	var gcdLength = gcd(str1.length, str2.length);
// 	return str1.substr(0, gcdLength);
// };

// console.log(gcdOfStrings("ABCABC", "ABC")); ///ABC

// // 83. Remove Duplicates from Sorted List

// // Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// // Return the linked list sorted as well.
// var deleteDuplicates = function (head) {
// 	if (!head) return head;

// 	const current = head;

// 	while (head !== null) {
// 		if (head.next !== null && head.val === head.next.val) {
// 			head.next = head.next.next;
// 		} else {
// 			head = head.next;
// 		}
// 	}

// 	return current;
// };

// 128. Longest Consecutive Sequence
// Medium

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.
// var longestConsecutive = function (nums) {
// 	let set = new Set(nums);
// 	let max = 0;
// 	for (let num of nums) {
// 		//for each number in the array, if the number minus 1 is not present in the set, it means the current number is the start of a consecutive sequence.
// 		if (!set.has(num - 1)) {
// 			let temp = num,
// 				current = 0;
// 			while (set.has(temp++)) {
// 				current++;
// 				max = Math.max(current, max);
// 			}
// 		}
// 	}
// 	return max;
// };

// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //4

// // 205. Isomorphic Strings

// // Given two strings s and t, determine if they are isomorphic.

// // Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// // All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// var isIsomorphic = function (s, t) {
// 	if (s.length !== t.length) {
// 		return false;
// 	}
// 	// map will store key vals
// 	let m = new Map();
// 	for (let i = 0; i < s.length; i++) {
// 		if (!m.has(s[i])) {
// 			m.set(s[i], t[i]);
// 		} else {
// 			//if there are dup values, it means that multiple keys map to the same val, which is not allowed

// 			if (m.get(s[i]) != t[i]) {
// 				return false;
// 			}
// 		}
// 	}
// 	return new Set([...m.values()]).size == m.size;
// };

//206. Reverse Linked List

// // Given the head of a singly linked list, reverse the list, and return the reversed list.
// var reverseList = function (head) {
// 	// prev pointer keeps track of the reversed list
// 	// current pointer used to traverse the list
// 	// next pointer is used to temporarily store the next node in the original list so we can reverse the pointers for each node.
// 	let current = head;
// 	let prev = null;
// 	let next = null;
// 	while (current) {
// 		//save next
// 		next = current.next;
// 		console.log(next, "next")
// 		//reverse
// 		current.next = prev;

// 		//advance prev and current
// 		prev = current;
// 		console.log(prev, "prev");

// 		current = next;
// 		console.log(current, "current")
// 	}
// 	return prev;
// 	console.log(prev, "prev")
// };

// console.log(reverseList([1, 2, 3, 4, 5]));


// var rob = function(nums) {
//      if (nums.length === 1) return nums[0];

//   const includeFirst = robHouses(nums, 0, nums.length-1);
//   const excludeFirst = robHouses(nums, 1, nums.length)
//   return Math.max(includeFirst, excludeFirst);
// };

// const robHouses = (nums, startIdx, endIdx) => {
//   // stores max amount robbed from previous 2 houses
//   let rob1 = 0;
//   let rob2 = 0;

//   for (let i = startIdx; i < endIdx; i++) {
//     // we can't rob 2 adjacent houses so curr amount (nums[i]) can only be added to rob1
//     let newRob = Math.max(nums[i] + rob1, rob2);
//     rob1 = rob2;
//     rob2 = newRob;
//   }
//   return rob2;
// }
// ;

//#215
// var findKthLargest = function(nums, k) {
//        nums.sort((a,b) => a - b).reverse();

//     return nums[k-1];

// };

// #209
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {boolean}
//  */
// var containsNearbyDuplicate = function(nums, k) {
//     for (let i=0; i < nums.length; i++){
//          let j = nums.length-1
//          while(i < j){
//              if(nums[i] == nums[j] && Math.abs(i-j) <=k){
//                  return true;
//              }
//          j--
//          }
//     }

//     return false
// };

//  const x = 2;
//  let y = 4;
//  function update(arg)
//  { return Math.random() + y * arg;
//  }
//   y = 2;
//   y=3
// //    ?;

//  const result = update(x); // 6-7
// console.log(update(x))
// console.log(y, "y")
// console.log(x, "x")

// #222 Count Complete Tree Nodes
// var countNodes = function (root) {
// 	if (!root) return 0;
// 	return countNodes(root.left) + countNodes(root.right) + 1;
// };

// // #225 Implement Stack using Queues
// The insertion in a stack is called a push, whereas the deletion in a stack is called a pop.

// However, the insertion and deletion from the stack could be done from one end only.
// It has a single pointer called top which points to the topmost element of the stack and insertion
// as well as deletion is performed by manipulating the top pointer only.
 var MyStack = function(array) {
    this.queue = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    return this.queue.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.queue.pop();
};

/**
 * @return {number}
 */
// last element of a stack is the top
MyStack.prototype.top = function() {
    return this.queue[this.queue.length-1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
};


/** LC
 * 226. Invert Binary Tree

Given the root of a binary tree, invert the tree, and return its root.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return null;
  //Swap the left and right node using a temp variable
  //Recursively call the function again for the left and right node

  let temp = root.left
  root.left = root.right
  root.right = temp
  if(root.left) invertTree(root.left)
  if(root.right) invertTree(root.right)
  return root;


};


// #228 Summary Range
// You are given a sorted unique integer array nums.

// A range [a,b] is the set of all integers from a to b (inclusive).

// Return the smallest sorted list of ranges that cover all the numbers in the array exactly.
// That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

// Each range [a,b] in the list should be output as:

// "a->b" if a != b
// "a" if a == b
var summaryRanges = function (nums) {
	let res = [];
	//define a default val
	let newRange = true;
	for (let i = 0; i < nums.length; i++) {
		if (newRange) {
			point = nums[i];
			newRange = false;
		}
		//if no dups between adj numbers
		if (nums[i + 1] != nums[i] + 1) {
			//assign a new range and push it into the res array
			newRange = true;
			if (point != nums[i]) res.push(`${point}->${nums[i]}`);
			//if there are adjacent dups push the first number
			else res.push(`${nums[i]}`);
		}
	}
	return res;
};

console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));


/**
 * 231. Power of Two

Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
	// if perfectly divisible by 1, then true else false
    return Math.log2(n) % 1 == 0
}

//𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟸(x) = 2^x  = n


// //#234 Given the head of a singly linked list, return true if it is a palindrome or false otherwise.
// * @param {ListNode} head
//  * @return {boolean}
//  */
var isPalindrome = function(head) {
    let stack = []
    let curr = head
    //place the curr list nodes in a stack
    while(curr){
        stack.push(curr.val)
        curr = curr.next
    }
    //check if last val of stack is equal to the first val of the list node
    while(head){
        if(head.val != stack.pop()) return false
        head=head.next
    }
    return true
};


/** LC 242
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split("").sort().join()
    t = t.split("").sort().join()

    return s===t
};


// LC #278 First Bad Version
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
        let start = 1
        let end = n

        while(start <= end){
            //find the mid
        const mid = Math.floor((start + end) / 2)
        //if it isn't a bad version, increment the start, else decrement the mid
        if(!isBadVersion(mid)){
            start = mid + 1
        }
        else{
            end = mid - 1
        }
        }
        // return start once the bad version is hit
        return start;

        }
    };


// / Iterative function to implement Binary Search
// let iterativeFunction = function (arr, x) {

//     let start=0, end=arr.length-1;

//     // Iterate while start not meets end
//     while (start<=end){

//         // Find the mid index
//         let mid=Math.floor((start + end)/2);

//         // If element is present at mid, return True
//         if (arr[mid]===x) return true;

//         // Else look in left or right half accordingly
//         else if (arr[mid] < x)
//              start = mid + 1;
//         else
//              end = mid - 1;
//     }

//     return false;
// }


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    return Math.min(Math.max(Math.trunc(dividend /  divisor),-(2**31)))
};

// 70. Climbing Stairs

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
let memo = [];
var climbStairs = function (n) {
	if (n == 1 || n == 2) {
		return n;
	}

	if (memo[n]) {
		return memo[n];
	} else {
		memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
		return memo[n];
	}
};

// 88. Merge Sorted Array


var merge = function (nums1, m, nums2, n) {
	for (let n = nums2.length - 1; n >= 0; n--) {
		nums1[n + m] = nums2[n];
	}

	nums1.sort((a, b) => a - b);

	return nums1;
};
