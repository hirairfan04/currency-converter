#! /usr/bin/env node
import inquirer from "inquirer";
const fixed_currency = {
    USD: 1,
    PKR: 277.54,
    INR: 83.30,
    CNY: 7.23,
    AFN: 71.23,
    IRR: 42075,
    KRW: 1351.27
};
let user_input = await inquirer.prompt([{
        message: "From currency",
        name: "from",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'CNY', 'AFN', 'IRR', 'KRW']
    },
    {
        message: "To currency",
        name: "to",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'CNY', 'AFN', 'IRR', 'KRW']
    },
    {
        message: "Enter amount",
        name: "amount",
        type: "number"
    }
]);
let fromAmount = fixed_currency[user_input.from];
let toAmount = fixed_currency[user_input.to];
let amt = user_input.amount;
let baseAmount = amt / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount.toFixed(2));
