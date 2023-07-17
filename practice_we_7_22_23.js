// 217. Contains Duplicate

// Given an integer array nums, return true if any value appears at least twice in the array,
//  and return false if every element is distinct.
var containsDuplicate = function (nums) {
	let res = new Set(nums);
    //change to array
	let newres = Array.from(res);
    //check if length of new res is not equal to nums length
	return newres.length !== nums.length;
};

console.log(containsDuplicate([1, 2, 3, 4])); //false
