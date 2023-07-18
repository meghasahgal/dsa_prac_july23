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
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // change to array
    let stack = s.split('');
    //if stack is an uneven length, there is no closing bracket for one or more opening brackets, so return false
    if(stack.length % 2 !=0) return false;
    let res =[]
    while(stack.length){
        let last = stack.pop()
        //check if last element is a closing bracket
        if (last === ')' || last === '}' || last === ']'){
            res.push(last)
        }
        else{
            let temp = res.pop()
            //check if the last ele and the temp ele are not opening and closing; return false if so.
            if (!((last ==='(' && temp===')') || (last ==='[' && temp === ']') || (last==='{' && temp ==='}'))){
                return false;
            }
        }
    }
    if(res.length) return false;
    return true;
};
