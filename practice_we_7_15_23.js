// /* #908 Smallest Range

// You are given an integer array nums and an integer k.

// In one operation, you can choose any index i where 0 <= i < nums.length and
// change nums[i] to nums[i] + x where x is an integer from the range [-k, k].
// You can apply this operation at most once for each index i.

// The score of nums is the difference between the maximum and minimum elements in nums.

// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.



// Example 1:

// Input: nums = [1], k = 0
// Output: 0
// Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.


// */

// var smallestRangeI = function (nums, k) {
// 	// spread out the nums array to get the max and min. Subtract them to find the score.
// 	let score = Math.max(...nums) - Math.min(...nums);
// 	console.log(score, "score");
// 	// Return the minimum score by checking if the score is greater that 2x the integer k.  If not, return 0.
// 	return score > 2 * k ? score - 2 * k : 0;
// };

// console.log(smallestRangeI([1,3,6], 3))

// #925. Long Pressed Name

// Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

// You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.



// Example 1:

// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:

// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it was not in the typed output.
// /**
//  * @param {string} name
//  * @param {string} typed
//  * @return {boolean}
//  */
// var isLongPressedName = function(name, typed) {
// 	// define arrays for name and type
// 	const name_array = name.split('')
// 	const typed_array = typed.split('')
// 	// define a length var to check for the lengths -- if the typed array's length is less than or equal to the OG name array, return false
// 	const typed_length = typed.typed_length
// 	if (name.length >= typed_array.length) return false
// 	console.log(name.length, "name length")
// 	console.log(typed_array.length, "typed length")
// 	//iterate through the typed array to check if the index vals at i are the same for name and type array
// 	for(let i = 0; i < typed_array.length; i++){
// 		//if the index vals are not the same, check to see if the current i and the previous i (i-1) in typed_array are the same
// 		if (name_array[i] !== typed_array[i]){
// 			if (typed_array[i]===typed_array[i-1]){
// 				//splice off the letter i to continue the process if true
// 				typed_array[i].splice(i, 1)
// 				//decrement i to get the prev value since it's been cut off
// 				i--
// 			}
// 			// where the previous val is not the same, return false
// 			else{
// 				return false
// 			}


// 		}

// 		// default to
// 		return true;

// 	}

// }
// // console.log(isLongPressedName("alex", "alexx")) // true
// console.log(isLongPressedName("alex", "alex")); //false
//----------------------------------------------------------------

/* #929. Unique Email Addresses

// Every valid email consists of a local name and a domain name, separated by the '@' sign.
Besides lowercase letters, the email may contain one or more '.' or '+'.

// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address,
email sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.

// Given an array of strings emails where we send one email to each emails[i], return the number of different addresses that actually receive mails.



// Example 1:

// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
// Example 2:

// Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
// Output: 3


// Constraints:

// 1 <= emails.length <= 100
// 1 <= emails[i].length <= 100
// emails[i] consist of lowercase English letters, '+', '.' and '@'.
// Each emails[i] contains exactly one '@' character.
// All local and domain names are non-empty.
// Local names do not start with a '+' character.
// Domain names end with the ".com" suffix.

-if an email has >1 @ signs, then it's not valid
-if an email has an @ sign it the local name (everything before the @ sign) then everything after is ignored
-will need to compare the emails and see which ones are unique; can take a set and get the size for the final result


// */
// var numUniqueEmails = (emails) =>
// 	new Set(
// 		emails.map((email) => {
// 			const [local, domain] = email.split("@");
// 			// console.log(`${local.split("+")}`); //test.email,alex
// 			// console.log(`${local.split("+")[0]}`) // test.email
// 			// console.log(`${local.split("+")[0].split(".")}`) // test,email
// 			// console.log(`${local.split("+")[0].split(".").join("")}@${domain}`) // testemail@leetcode.com
// 			// console.log(`${local.split("+")[0].split(".").join("")}@${domain}`);
// 			return `${local.split("+")[0].split(".").join("")}@${domain}`;
// 		})
// 	).size;
// console.log(
// 	numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])
// );//2

// ---
// const array1 = [1, 3, 2];

// console.log(array1.indexOf(Math.max(...array1)));
// // Expected output: 3

// #941. Valid Mountain Array

// Given an array of integers arr, return true if and only if it is a valid mountain array.

// Recall that arr is a mountain array if and only if:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
// arr[i] > arr[i + 1]  > ... > arr[arr.length - 1]

var validMountainArray = function (arr) {
	var max = Math.max(...arr);
	var max_i = arr.indexOf(max)
	// console.log(max_i, "max index");
	var lower_i = max_i-1
	var upper_i = max_i+1


	//if the value of max is greater than the value of the index of max + 1, &&
	// if the value of max is greater than the value of the index of max-1, return true
	//else return false
	if (
		arr[arr.indexOf(max)] > arr[lower_i] &&
		arr[arr.indexOf(max)] > arr[upper_i]
	) {
		return true;
	} else {
		return false;
	}
};
console.log(validMountainArray([0, 3, 2, 1])); //true
