// Convert the string "A,B,C,D" into an array.
// const string = "A,B,C,D";
// console.log(string.split(','));

// Remove extra spaces from the string " Salary Credited ".
// const string = " salary credited ";
// console.log(string.trim());

// Check if "Salary credited" contains the word "salary" (case-insensitive).
// const string = "Salary credited";
// console.log(string.includes('Salary'));

// Split the string "TXN001,50000,Credit" into individual values.
// const string = "TXN001,50000,Credit";
// console.log(string.split(','));

// Convert the string "50000" into a number.
// const string = '50000';
// const num = Number(string)
// console.log(string)
// console.log(typeof num);

// Compare -8000 and 5000 and find the larger transaction using absolute value.
// let a = -8000;
// let b = 5000;
// const largerTransaction = Math.abs(a) > Math.abs(b) ? a : b;
// console.log(largerTransaction);

// Find the sum of all numbers in an array.
// const arr = [1,-8,10,5];
// const sum = arr.reduce(function(acc, curr) {
//     acc = acc + curr;
//     return acc;
// }, 0);
// console.log(sum)

// Convert an array of numeric strings into an array of numbers.
// const str = ['1','2','4','6'];
// const number = str.map(Number)
// console.log(number);

// Convert the entire CSV text into an array of rows.
const fs = require('fs');
const data = fs.readFileSync('./PracticeQuestions/index.csv', 'utf-8');
// console.log(data)

// ++++++++ split humesha string ko array mei convert krta hai +++++++++++
// +++++++ slice is used jab index ka koi piece nikaalna ho like slice(1) means ki 1 index se aage tk ka dedo poora index +++++++
const rows = data.split('\n');
console.log(rows)

const header = rows[0].split(',');
const remainingRows = rows.slice(1);
// console.log(header)
// console.log(remainingRows)

// Convert each data row into a JavaScript object.
const result = remainingRows.map((row) => {
    const value = row.split(',');
    // console.log(value)

    let obj = {};
    header.map((key,i) => {
        obj[key] = value[i];
    })
     return obj;
});

console.log(result)

