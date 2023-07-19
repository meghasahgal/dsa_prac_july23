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
