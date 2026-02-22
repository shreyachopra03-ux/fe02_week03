 const fs = require('fs');

const data = fs.readFileSync('./bank.csv/fe02_bank.csv', 'utf-8');
console.log(data);

const rows = data.split('\n');
// console.log(rows)

const headers = rows[0].split(',');
// console.log(headers)

const remainingRows = rows.slice(1);
// console.log(remainingRows);

const result = remainingRows.map(row => {
    const values = row.split(',');
    // console.log(values);
    let obj = {};

    headers.map((key,i) => {
        obj[key] = values[i];
    })
    return obj; 
});
console.log(result);

// Sort all transactions in ascending order by Date
 result.sort((a,b) => {
    if(new Date(a.Date) >= new Date(b.Date)) return 1;
    return -1;
 });
 

// Filter and analyze:

// Find total credits and debits for each account holder
const name = result.map((x) => x.AccountHolder);
// console.log(name);

// const record = name.forEach((x) => {
//     if(result.includes(name)) {
//         return result;

//         else{
//             return {
//                 TotalCredit = 0;
//                 TotalDebit = 0;
//             }
//         }



//     }
// })




