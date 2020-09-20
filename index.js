const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe the project",
        name: "description"
    },
    {
        type: "input",
        message: "Describe the project's installation process",
        name: "installation"
    },
    {
        type: "input",
        message: "Describe the project's usage information",
        name: "usage"
    }, 
    {
        type: "input",
        message: "Describe the project's contribution guidelines",
        name: "contribution"
    },
    {
        type: "input",
        message: "Describe the project's test instructions?",
        name: "tests"
    },
    {
        type: "input",
        message: "What's your project's license?",
        name: "license"
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your email adress",
        name: "email"
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
        var markdown = generateMarkdown(response);
        console.log(markdown);
    });
}

// function call to initialize program
init();

