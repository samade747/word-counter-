#! /usr/bin/env node

// import the inquirer package
import inquirer from "inquirer"

// ask the user for input
const answers:  { // define the type of the input

    Sentence: string // define the type of the input
} = await inquirer.prompt([ // ask the user for input
    {
        type: "input", // define the type of the input
        name: "Sentence", // define the name of the input
        message: "Sentence: " //      define the message of the input
        
    }
])

// 
const words = answers.Sentence.trim().split(" ") // split the input into an array of words

console.log(words) // print the array of words


