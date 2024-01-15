/** 
 * Javascript Beginner Challenges
 *  Question 1 Return the sum of two numbers
 * create a function that takes two arguments as functions and return their sum
 * 
function addition(num1, num2) {
    return num1 + num2
}
console.log(addition(3, 2));

function addition2(num1, num2) {
    return num1 + num2
}

console.log(addition(-3, -6))

function addition3(num1, num2) {
    return num1 + num2
}

console.log(addition(7, 3))
 * 
 * 
*/


/**
 * Question 2 Convert hours into seconds
 * Create a function that converts hours into seconds
 * 
 * 
 * 
function time(num1, num2, num3) {
    return num1 * num2 * num3
}

console.log(time(2, 60, 60))

function time2(num1, num2, num3) {
    return num1 * num2 * num3
}

console.log(time2(10, 60, 60))

function time3(num1, num2, num3) {
    return num1 * num2 * num3
}

console.log(time3(24, 60, 60))

// with variables

function hoursIntoSeconds(hour){
    let minutes = hour * 60;
    let seconds = minutes * 60;
    return seconds
}
console.log(hoursIntoSeconds(2))

// with variables

function hoursIntoSeconds(hour){
    let minutes = hour * 60;
    let seconds = minutes * 60;
    return seconds
}
console.log(hoursIntoSeconds(10))

// with variables

function hoursIntoSeconds(hour){
    let minutes = hour * 60;
    let seconds = minutes * 60;
    return seconds
}
console.log(hoursIntoSeconds(24))


// simplified with variables

function hoursIntoSeconds(hour){
    let seconds = hour * 60 * 60;
    return seconds
}
console.log(hoursIntoSeconds(2))

// simplified with variables

function hoursIntoSeconds(hour){
    let seconds = hour * 60 * 60;
    return seconds
}
console.log(hoursIntoSeconds(10))

// simplified with variables

function hoursIntoSeconds(hour){
    let seconds = hour * 60 * 60;
    return seconds
}
console.log(hoursIntoSeconds(24))

// solution similar to mine

function hoursIntoSeconds(hour){
    return hour * 60 * 60;
}
console.log(hoursIntoSeconds(2))

// solution similar to mine

function hoursIntoSeconds(hour){
    return hour * 60 * 60;
}
console.log(hoursIntoSeconds(10))

// solution similar to mine

function hoursIntoSeconds(hour){
    return hour * 60 * 60;
}
console.log(hoursIntoSeconds(24))
 * 
 * 
 */

// Q3 Calculate the perimeter of a rectangle

// function calcPerimeter(length, width) {
//     return 2 * length + 2 * width
// }

// console.log(calcPerimeter(6,7))

// function calcPerimeter(length, width) {
//     return 2 * length + 2 * width
// }

// console.log(calcPerimeter(20,10))

// function calcPerimeter(length, width) {
//     return 2 * length + 2 * width
// }

// console.log(calcPerimeter(2,9))

// Q4 Calculate the area of a triangle
/** 
 * 
function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height
}

console.log(calcAreaOfTriangle(3,2))

function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height
}

console.log(calcAreaOfTriangle(10, 10))

function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height
}

console.log(calcAreaOfTriangle(20, 20))
 * 
 * 
*/

/** 
 * Q5 Extend a  string
 * 
function appendFrontend(string) {
    return string + 'Frontend'
}

console.log(appendFrontend('Apple'))
 * 
 * 
 */

/** 
 Q6 Greater than 100?
 * 
 * 
 * 
 function sumGreaterThan100(num1, num2){
     return num1 + num2
 }
 if (sumGreaterThan100(20, 10) > 100) {
         console.log(true);
     }
     else {
         console.log(false);
     }
 
 function sumGreaterThan100(num1, num2){
     return num1 + num2
 }
 if (sumGreaterThan100(50, 60) > 100) {
         console.log(true);
     }
     else {
         console.log(false);
     }
 
 function sumGreaterThan100(num1, num2){
     return num1 + num2
 }
 if (sumGreaterThan100(100, -50) > 100) {
         console.log(true);
     }
     else {
         console.log(false);
     }
 
 
 // Davids Solution
 
 function sumGreaterThan100(num1, num2) {
     if (num1 + num2 > 100) {
         return true;
     }
     else {
         return false;
     }
 }
 
 console.log(sumGreaterThan100(50,51));
 * 
*/

// Davids solution with less lines of code

//function sumGreaterThan100(num1, num2) {
//    if (num1 + num2 > 100) {
//        return true;
//    } 
//        console.log('thisran@@@@')
//        return false;
//    }
//
//
//console.log(sumGreaterThan100(5,51));

// Davids solution without if statement since the operator respond with a boolean by itself already

//function sumGreaterThan100(num1, num2) {
//    return num1 + num2 > 100 }
//
//console.log(sumGreaterThan100(5,51));

/** 
 * Q7 Less than or equal to zero?
 * 
function lessThanOrEqualToZero (num1) {
    return num1 <= 0
}
console.log(lessThanOrEqualToZero(3))
//
function lessThanOrEqualToZero (num1) {
    return num1 <= 0
}
console.log(lessThanOrEqualToZero(0))
//
function lessThanOrEqualToZero (num1) {
    return num1 <= 0
}
console.log(lessThanOrEqualToZero(-2))
 * 
 * 
 * 
 * 
 */

/** 
 Q8 Opposite boolean
 * 
 * 
 function oppositeBoolean (bool) {
     return !bool
 }
 
 console.log(oppositeBoolean(true))
 * 
 * 
 * 
 * 
 * 
*/

/**  
 * Q9 Is not the number 0
 * 
function isNotZero(num1,) {
    return num1 !== 0
}
console.log(isNotZero(""))
 * 
 * 
*/

/** 
 * Q10 Calculate the remainder
 * 
function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(4, 2))

function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(7, 8))

function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(9, 8))
 * 
 */

/** 
 * Q11 
 * 
function isOdd(num1) {
    return num1 % 2 !== 0
}

console.log(isOdd(1))

function isOdd(num1) {
    return num1 % 2 !== 0
}

console.log(isOdd(2))

function isOdd(num1) {
    return num1 % 2 !== 0
}

console.log(isOdd(3))
 * 
 * 
 * 
 */

/** 
 * Q12 If a number is even, return 1 otherwise return -1
 * 
// with the if statement
function booleanInteger(num1) {
    if (num1 % 2 === 0) {
        return 1
    }
    else {
        return -1
    }
}
console.log(booleanInteger(1))
 * 
// the one line way
function booleanInteger(num1) {
    return num1 % 2 === 0 ? 1 : -1;
} 
console.log(booleanInteger(2))


Q13 Check if a user is loggedi in AND subscribed

function isLoggedInAndSubscribed(str1, str2) {
    return str1 === "LOGGED_IN" && str2 === "SUBSCRIBED" ? true : false
}
console.log(isLoggedInAndSubscribed("LOGGED_IN", "UNSUBSCRIBED")) 
 * 

//with if statements
function isLoggedInAndSubscribed(loggedIn, subscribed) {
    if (loggedIn === 'LOGGED_IN' && subscribed === 'SUBSCRIBED') {
        return true
    }
    return false
}

console.log(isLoggedInAndSubscribed('SUBSCRIBED', 'SUBSCRIBED'))

 */

/** 
 * Q14 Check if a user is logged in OR subscribed
 * 
function isLoggedInAndSubscribed(str1, str2) {
    if (str1 === 'LOGGED_IN' || str2 === 'SUBSCRIBED') {
        return true;
    }
    return false;
}
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'))
 * 
 * 
 * 
*/

//Beginner Challenges Completed !