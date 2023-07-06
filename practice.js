/*1
#860 Lemonode Change:
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.
*/
// var lemonadeChange = function(bills) {
//     //establish counter variables to keep track of the number of $5 and $10 bills
//     let number_5 =0;
//     let number_10 = 0;
//     //iterate through the bills array
//     for (let i of bills){
//     //for anyone paying the exact $5, increment the number of $5 bills by one
//         if (i==5){
//             number_5++;
//         }
//         //if one has a $10 bill, will need to decrement $5 by one and increment $10 bill by one (checking first to see if we have a $5 billl)
//         else if (i==10){
//             if(number_5 == 0) return false;
//             number_5--, number_10++;
//         }
//         //if the number of $10 and $5 bills is greater than 0 (someone pays with a $20), will need to decrement both 5 and 10
//         // else if the number of $5 bills is greater than 3, then one can give change with three $5s
//          else {
//                 if (number_5 > 0 && number_10 > 0) {
//                     number_5--;
//                     number_10--;
//                 } else if (number_5 >= 3) {
//                     number_5 -= 3;
//                 } else {
//                     return false;
//                 }
//             }
//         }
// // default
//         return true;
//     }

/*#868 Binary Gap:
Given a positive integer n, find and return the longest distance between any two adjacent 1's in the binary representation of n.
If there are no two adjacent 1's, return 0.
Two 1's are adjacent if there are only 0's separating them (possibly no 0's).
The distance between two 1's is the absolute difference between their bit positions. For example, the two 1's in "1001" have a distance of 3.
*/

var binaryGap = function (n) {
    // convert number to binary with .toString(base 2) method
	let binary = n.toString(2);
	console.log("binary", binary); //10110
	let longest = 0,
		last = 0;
	    i = 0;
    //iterate through the binary number
	while (i < binary.length) {
        //check if index is equal to 1
		if (binary[i] === "1") {
            //calculate the distance between the current index of 1 and the last index of 1
			let distance = i - last;
            //set last to the index if it's equal to 1
			last = i;
            //get the longest distance between the longest and the distance, set it equal to longest
			longest = Math.max(longest, distance);
		}
        // increment i
		i++;
	}
    //return the longest var
	return longest;
};

console.log(binaryGap(22));


//#27 Merge 2 Sorted Lists
/*You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list. */
var mergeTwoLists = function (list1, list2) {
	//base cases
	//if there's no list1 or list2, return the list2 or list1, respectively
	//define an array of minNode and maxNode --
	// ternary to check if list1's val is greater than list2's val, return [list2, list1] or
	// if not, return [list1, list2] for the ascending order
	if (!list1 || !list2) {
		return list1 || list2;
	}
	const [minNode, maxNode] =
		list1.val > list2.val ? [list2, list1] : [list1, list2];

	//recursive case
	// return a new listNode as the final solution with the minNode val as the first value and the recursion through mergeTwoLists function (taking in the minNode.next and the maxnNode)
	return new ListNode(minNode.val, mergeTwoLists(minNode.next, maxNode));
};
