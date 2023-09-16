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

// //
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
