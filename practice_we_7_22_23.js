// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array,
//  and return false if every element is distinct.
// var containsDuplicate = function (nums) {
// 	let res = new Set(nums);
//     //change to array
// 	let newres = Array.from(res);
//     //check if length of new res is not equal to nums length
// 	return newres.length !== nums.length;
// };

// console.log(containsDuplicate([1, 2, 3, 4])); //false

//------

// #20. Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false
// var isValid = function(s) {
//     // change to array
//     let stack = s.split('');
//     //if stack is an uneven length, there is no closing bracket for one or more opening brackets, so return false
//     if(stack.length % 2 !=0) return false;
//     let res =[]
//     // console.log(res, "res")
//     while(stack.length){
//         let last = stack.pop()
//         console.log(last, "last")
//         //check if last element is a closing bracket
//         if (last === ')' || last === '}' || last === ']'){
//             res.push(last)
//             console.log(res, "res after pushing last")
//         }
//         else{
//             //check if last element is an opening bracket
//             let temp = res.pop()
//             console.log(temp, "temp")
//             //check if the last ele and the temp ele are not opening and closing; return false if so.
//             if (!((last ==='(' && temp===')') || (last ==='[' && temp === ']') || (last==='{' && temp ==='}'))){
//                 return false;
//             }
//         }
//     }
//     if(res.length) return false;
//     return true;
// };
// console.log(isValid("()[]{}"));

// --
// #27. Remove Element

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// var removeElement = function (nums, val) {
// 	return nums.filter(x => x !== val)
//     };

// var removeElement = function (nums, val) {
//     //establish a counter
// 	let count = 0;
//     //iterate through nums
// 	for (let i = 0; i < nums.length; i++) {
//         // to see if each number is not equal to the value
// 		if (nums[i] !== val) {
//             //if the number is not equal to the value, set nums @ count index to the nums[i]
// 			nums[count] = nums[i];
//             //increment the counter
// 			count++;
// 		}
// 	}
// 	return count;
// };


// console.log(removeElement([3, 2, 2, 3], 3)) //2


// 207. Course Schedule

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.


var canFinish = function (numCourses, prerequisites) {
	const hash = {};
	for (let course = 0; course < numCourses; course++) {
		hash[course] = [];
	}
	for (let [course, prereq] of prerequisites) {
		hash[course].push(prereq);
	}
	const visited = new Set(); // used for cycle detection
	const dfs = (course) => {
		if (visited.has(course)) return false;
		if (hash[course].length === 0) return true;
		visited.add(course);
		for (let prereq of hash[course]) {
			if (!dfs(prereq)) return false;
		}
		visited.delete(course);
		hash[course] = []; // this represents that the course has been validated
		return true;
	};
	for (const course in hash) {
		// we need to go through each course in the case of unconnected graph
		if (!dfs(course)) return false;
	}

	return true;
};


// var canFinish = function (numCourses, prerequisites) {
// 	//define obj vars for adj list and visited nodes
// 	//The visited object is used to keep track of which node we are currently at, once we travel through all the children, and see that there is no re-occurance of the current node (a cycle) we can remove the current node from the visited.  If there is a cycle, need to return false.

// 	// create an adjacency list of nodes needed to be able to take course; iterate through prerequistes array
// 	const preMap = {};
// 	const visited = {};

// 	// build the adacency list
// 	for (let i = 0; i < prerequisites.length; i++) {
// 		if (preMap[prerequisites[i][0]] === undefined) {
// 			preMap[prerequisites[i][0]] = [prerequisites[i][1]];
// 		} else {
// 			preMap[prerequisites[i][0]].push(prerequisites[i][1]);
// 		}
// 	}
// 	console.log(preMap);
// 	const dfs = (node) => {
// 		if (visited[node]) {
// 			return false;
// 		}
// 		if (preMap[node] !== undefined) {
// 			if (preMap[node].length === 0) {
// 				return true;
// 			}

// 			visited[node] = true;
// 			for (let val of preMap[node]) {
// 				if (!dfs(val)) {
// 					return false;
// 				}
// 			}
// 			visited[node] = false;

// 			preMap[node] = [];
// 		}
// 		return true;
// 	};

// 	for (let key in preMap) {
// 		if (!dfs(key)) {
// 			return false;
// 		}
// 	}
// 	return true;
// };


//--
// #137. Single Number II

// Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only constant extra space.
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    //create an obj that holds the counts of each num
    let res ={}
    for (let num of nums){
       res[num] = ++res[num] || 1;
    }
    //return the num (key) with the count of 1
    for (let key in res){
       if(res[key]===1){
          return key
       }
    }
};

console.log(singleNumber([2,2,3,2])) // 3
console.log(singleNumber([1,2,2]))
