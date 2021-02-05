// /* Ex.A
//    Create a variable test that contains a string.
// */
// const test = "This is a string"
// console.log(test)
// /* Ex.B
//     Create a variable sum that contains the result of the sum between 10 and 20.
// */
// const sum = 10 + 20
// console.log(sum)
// /* Ex.C 
//     Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
// */
// const random = Math.random() * 20
// console.log(random)
// /* Ex.D
//     Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
// */
// const me = {
//     name: "Baxtiyor",
//     surname: "Abdivaitov",
//     age: 20
// }
// console.log(me)
// /* Ex.E 
//     Programmatically remove the age property from the previously create object.
// */
// delete me.age
// console.log(me)
// /* Ex.F 
//    Programmatically add to the object me an array "skills" that contains the programming languages that you know.
// */
// me.skills = "python"
// console.log(me)
// /* Ex.G 
//    Programmatically remove the last skill from the array "skills" inside of the "me" object.
// */
// delete me.skills
// console.log(me)
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/
const dice = function(x,  y){
    let random = Math.random() * y
    return random
}
console.log(dice(1, 6))
/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/
/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/
const whoIsBigger = function(a, b){
    if(a > b) {
        return a
    }
    else {
        return b
    }
}
console.log(whoIsBigger(5, 6))
/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/
const splitMe = function(str){
    console.log(str)
}
splitMe("I love coding".split(" "))
/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/
const deleteOne = function(bts,  boolean){
    
    let sdt = boolean[true]
    let brs = boolean[false]
    if(boolean === sdt){
        console.log(bts.shift())
    }else
    console.log(bts.pop())
    console.log(bts)

}
deleteOne("Hello".split(""), false)
/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
function onlyLetters(str) {


	// const regex = /\D+/g;
	// let m;

	// non_digit_arr = [];
	// while ((m = regex.exec(str)) !== null) {
	// 	// This is necessary to avoid infinite loops with zero-width matches
	// 	if (m.index === regex.lastIndex) {
	// 		regex.lastIndex++;
	// 	}


	// 	m.forEach((match, groupIndex) => {
	// 		if (match.trim() != '') {
	// 			non_digit_arr.push(match.trim());
	// 		}
	// 	});
	// }
	// return non_digit_arr;
//     const toArr = str.split('')
//     const filteredArr = []
//   for(let i =0; i<toArr.length; i++) {
//       if(!parseInt(toArr[i])) {
//         filteredArr.push(toArr[i])
//       }
//   }
//   return filteredArr.join('')
return str.split('').filter(char => !parseInt(char) ).join('')
}
// '2' 2
console.log('parsed', parseInt('h'))
const str = "I love 123 whatever"
console.log(onlyLetters(str))
/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/
const isThisAnEmail = function(inputText) 
{
    if(inputText.includes('@')&& !inputText.includes(' ') && inputText.includes('.com')) {
        return true
    } else {
        return false
    }
//      let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// if(inputText.match(mailformat))
// {
// console.log("Valid email address!");

// return true;
// }
// else
// {
// console.log("You have entered an invalid email address!");

// return false;
// }
}
console.log(isThisAnEmail("issjsm"))
/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/
const whatDayIsIt = function(y){
   console.log("Today is")
    
}
let x = Array(7)
x[0] = "Monday"
x[1] = "Tuesday"
x[2] = "Wednesday"
x[3] = "Thursday"
x[4] = "Friday"
x[5] = "Saturday"
x[6] = "Sunday"
whatDayIsIt() + console.log( x[3])
/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
const rollTheDices = function(x,  y){
    let random = Math.random()
    let extra = [x + y, x, y]  
    return extra
 
   
}
console.log(rollTheDices(3, 5))
   /* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
// */
// const howManyDays = function(sp, jp){
//     today = new Date();
//     let dd = today.getDate();
//     let mm = today.getMonth()+1; //As January is 0.
//     let yyyy = today.getFullYear();
    
//     if(dd<10) dd='0'+dd;
//     if(mm<10) mm='0'+mm
//    let previous = new Date();
//    let dd1 = previous.getDate();
//     let = previous.getMonth()+1; //As January is 0.
//     let yyyy = previous.getFullYear();
//     return Math.ceil((today- previous))

//     }
//     console.log(howManyDays)
function days_passed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }
  console.log(days_passed(new Date(2015, 0, 15)));
  console.log(days_passed(new Date(2015, 11, 13)));