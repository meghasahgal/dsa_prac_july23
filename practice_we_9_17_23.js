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

var gcdOfStrings = function(str1, str2) {
// if two strings have a common divider, the combination of the two strings should be equal

     if ((str1 + str2) !== (str2 + str1)){
         return ""
     }
    //recursive function
    const gcd = (a,b)=>{
        if(!b){
            return a
        }

   return gcd(b, a%b)
    }
   var gcdLength = gcd(str1.length, str2.length)
   return str1.substr(0, gcdLength)


};

console.log(gcdOfStrings("ABCABC", "ABC"));///ABC


// 83. Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.
var deleteDuplicates = function (head) {
	if (!head) return head;

	const current = head;

	while (head !== null) {
		if (head.next !== null && head.val === head.next.val) {
			head.next = head.next.next;
		} else {
			head = head.next;
		}
	}

	return current;
};


// 128. Longest Consecutive Sequence
// Medium

// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.
var longestConsecutive = function (nums) {
	let set = new Set(nums);
	let max = 0;
	for (let num of nums) {
		//for each number in the array, if the number minus 1 is not present in the set, it means the current number is the start of a consecutive sequence.
		if (!set.has(num - 1)) {
			let temp = num,
				current = 0;
			while (set.has(temp++)) {
				current++;
				max = Math.max(current, max);
			}
		}
	}
	return max;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));//4
