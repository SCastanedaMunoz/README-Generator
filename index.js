const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your user name?",
        name: "username"
    },
    {
        type: "password",
        message: "What is your password?",
        name: "password"
    },
    {
        type: "password",
        message: "Re-enter password to confirm:",
        name: "confirm"
    }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then(function (response) {
        console.log(response);
    });
}

// function call to initialize program
init();

