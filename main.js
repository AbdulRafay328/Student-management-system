#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 8000);
const myBalance = 0;
let studentData = await inquirer.prompt([
    {
        name: "Students",
        type: "input",
        message: "Enter your name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return " please enter a name";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled",
        choices: ["Web dev", "Graphic designing", "Gen Ai", "SEO", "Networking"]
    }
]);
const tutionfee = {
    "Web dev": 2000,
    "Graphic designing": 1000,
    "Gen Ai": 5000,
    "SEO": 3000,
    "Networking": 4000
};
console.log(`Tution fee: ${tutionfee[studentData.courses]}`);
console.log(`Balance: ${myBalance}`);
let paymentMethod = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Easy paisa", "Jazz cash", "Bnak transfer"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer money",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non empty value";
        }
    }
]);
console.log(`you select payment method ${paymentMethod.payment}`);
const tutionFees = tutionfee[studentData.courses];
const paymentAmount = parseFloat(paymentMethod.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulations , you have successfully enrolled in ${studentData.courses}`);
    let answer = await inquirer.prompt([{
            name: "select",
            type: "list",
            message: "What would you like to do next",
            choices: ["view status", "exit"]
        }]);
    if (answer.select === "view status") {
        console.log(`Student name : ${studentData.Students}`);
        console.log(`Student ID : ${randomNumber}`);
        console.log(`course : ${studentData.courses}`);
        console.log(`Tution fees paid : ${paymentAmount}`);
    }
    else {
        console.log(`exit student management system`);
    }
}
else {
    console.log(`invalid amount due to course`);
}
