"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import the inquirer package
var inquirer_1 = require("inquirer");
// ask the user for input
var answers = await inquirer_1.default.prompt([
    {
        type: "input", // define the type of the input
        name: "Sentence", // define the name of the input
        message: "Sentence: " //      define the message of the input
    }
]);
// 
var words = answers.Sentence.trim().split(" "); // split the input into an array of words
console.log(words); // print the array of words
