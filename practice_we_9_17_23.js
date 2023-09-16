//Last Stone Weight
var lastStoneWeight = function(stones) {
    while(stones.length > 1){
        stones.sort((a,b) => a-b)
        if(stones[stones.length-1] - stones[stones.length-2]===0){
            stones.pop()
            stones.pop()
        }
        else if(stones[stones.length-1] - stones[stones.length -2] !== 0){
            //reassign second to last
            stones[stones.length-2] = stones[stones.length-1] - stones[stones.length-2]
            //pop off the last
            stones.pop()
        }
    }
    return stones
};
// #1051 Height Checker
var heightChecker = function(heights) {
    let count = 0
    // console.log([...heights], "spread out heights")
    const sorted = [...heights].sort((a,b) => a-b)
    console.log(sorted, "sorted")
    for(let i = 0; i < heights.length; i++){
        if(sorted[i]!==heights[i]){
            console.log(sorted[i], "sorted[i")
            count++
        }
    }
    return count
};

console.log(heightChecker([1,1,4,2,1,3])) //3
