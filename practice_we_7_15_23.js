/* #908 Smallest Range

You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and
change nums[i] to nums[i] + x where x is an integer from the range [-k, k].
You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.



Example 1:

Input: nums = [1], k = 0
Output: 0
Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.


*/

var smallestRangeI = function (nums, k) {
	// spread out the nums array to get the max and min. Subtract them to find the score.
	let score = Math.max(...nums) - Math.min(...nums);
	console.log(score, "score");
	// Return the minimum score by checking if the score is greater that 2x the integer k.  If not, return 0.
	return score > 2 * k ? score - 2 * k : 0;
};

console.log(smallestRangeI([1,3,6], 3))
