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
var isLongPressedName = function(name, typed) {
	// define arrays for name and type
	const name_array = name.split('')
	const typed_array = typed.split('')
	// define a length var to check for the lengths -- if the typed array's length is less than or equal to the OG name array, return false
	const typed_length = typed.typed_length
	if (name.length >= typed_array.length) return false
	console.log(name.length, "name length")
	console.log(typed_array.length, "typed length")
	//iterate through the typed array to check if the index vals at i are the same for name and type array
	for(let i = 0; i < typed_array.length; i++){
		//if the index vals are not the same, check to see if the current i and the previous i (i-1) in typed_array are the same
		if (name_array[i] !== typed_array[i]){
			if (typed_array[i]===typed_array[i-1]){
				//splice off the letter i to continue the process if true
				typed_array[i].splice(i, 1)
				//decrement i to get the prev value since it's been cut off
				i--
			}
			// where the previous val is not the same, return false
			else{
				return false
			}


		}

		// default to
		return true;

	}

}
// console.log(isLongPressedName("alex", "alexx")) // true
console.log(isLongPressedName("alex", "alex"));
