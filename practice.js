/*1
#860 Lemonode Change:
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.
*/
var lemonadeChange = function(bills) {
    //establish counter variables to keep track of the number of $5 and $10 bills
    let number_5 =0;
    let number_10 = 0;
    //iterate through the bills array
    for (let i of bills){
    //for anyone paying the exact $5, increment the number of $5 bills by one
        if (i==5){
            number_5++;
        }
        //if one has a $10 bill, will need to decrement $5 by one and increment $10 bill by one (checking first to see if we have a $5 billl)
        else if (i==10){
            if(number_5 == 0) return false;
            number_5--, number_10++;
        }
        //if the number of $10 and $5 bills is greater than 0 (someone pays with a $20), will need to decrement both 5 and 10
        // else if the number of $5 bills is greater than 3, then one can give change with three $5s
         else {
                if (number_5 > 0 && number_10 > 0) {
                    number_5--;
                    number_10--;
                } else if (number_5 >= 3) {
                    number_5 -= 3;
                } else {
                    return false;
                }
            }
        }
// default
        return true;
    }
