/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area = function(l1, l2) {

}
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
const crazySum = function(int1, int2){
    if (int1 === int2) {
        let result = (int1 + int2)* 3
        return result
    }
    else{
    let result = int1 + int2;
    return result
    }

   
}
console.log(crazySum(2, 2))
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
const crazyDiff = function(gn) {
   
    

    if (gn > 19) {
        let ex3 = gn * 19
        return ex3
    } 
    else {
        let ex3 = (gn !== 19)
        return ex3
        console.log(ex3)

    }

}
console.log(crazyDiff(20))
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
const boundary = function (n) {
    if (20 < n > 100) (n === 400)
    let result1 = true
    return result1
    
    
}
console.log(boundary(25))
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
// const strivify = function (string){
//     let Strive = "Strive"
//     if (string !== Strive){
//     let olk = string + "Strive"
//     return olk
//     }
//     else{
//         return string
//     }
// }
// console.log(strivify(Strive))
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
const check3and7 = function(pn){
    let rst = pn >0
    let rst1 = pn/3
    let rst2 = pn/7
    let totalrst = [rst, rst1, rst2]
    if ((rst)&& (rst1 || rst2))
        return totalrst
    
   
    
}
console.log(check3and7(2))
/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/
const reverseString = function(string1){
    let hello = string1
    return hello
}
console.log(reverseString("hello").reverse)