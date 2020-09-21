const inquirer = require("inquirer");
const fs = require("fs");
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
        type: "list",
        message: "What's your project's license?",
        name: "license",
        choices: [
            { name: "Apache", value: { name: "Apache", badge: "https://img.shields.io/badge/License-Apache%202.0-blue.svg" } },
            { name: "Creative Commons", value: { name: "Creative Commons", badge: "https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg" } },
            { name: "GNU GPLv3", value: { name: "GNU GPLv3", badge: "https://img.shields.io/badge/License-GPLv3-blue.svg" } },
            { name: "ISC", value: { name: "ISC", badge: "https://img.shields.io/badge/License-ISC-blue.svg" } },
            { name: "MIT", value: { name: "MIT", badge: "https://img.shields.io/badge/License-MIT-yellow.svg" } },
            { name: "Unlicense", value: { name: "Unlicense", badge: "https://img.shields.io/badge/license-Unlicense-blue.svg" } },
            { name: "Zlib", value: { name: "Zlib", badge: "https://img.shields.io/badge/License-Zlib-lightgrey.svg" } }
        ]
    },
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your name",
        name: "devname"
    },
    {
        type: "input",
        message: "Enter your Email adress",
        name: "email"
    },
    {
        type: "input",
        message: "How to contact in case of questions?",
        name: "questioning"
    },
    {
        type: "input",
        message: "How would you like to name your README file?",
        name: "filename"
    }
];

// function to write README file
function writeToFile(fileName, data) {

    const outputsDir = "./outputs";

    if (!fs.existsSync(outputsDir)) {
        fs.mkdir(outputsDir, err => {
            if (err) {
                console.log(`Error: ${err}`)
                return;
            }
        });
    }

    fs.writeFile(`${outputsDir}/${fileName}.md`, data, "utf-8", err => {
        if (err) {
            console.log(`Error: ${err}`)
            return;
        }
        console.log(`${fileName}.md saved to outputs folder!`);
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (response) {
            generateMarkdown(response)
            .then((markDownContent) => writeToFile(response.filename, markDownContent));
        });
}

// function call to initialize program
init();

// Uncomment this code to run Sample Test
// sample = {
//     title: 'README Generator',
//     description: 'This Project is a test for the README Generator',
//     installation: 'Clone the Github Repository and Run npm i',
//     usage: 'This project can be used to easily create README.md files',
//     contribution: "Go to the Project's Repository and Create a Pull Request",
//     tests: 'Use node index.js to run the cli application',
//     license: { name: "Zlib", badge: "https://img.shields.io/badge/License-Zlib-lightgrey.svg" }  ,
//     username: 'SCastanedaMunoz',
//     devname: 'Santiago Castaneda Munoz',
//     email: 'santiagocm98@hotmail.com',
//     questioning: 'Sned info through emails',
//     filename: 'README_SAMPLE'
// }

// generateMarkdown(sample)
// .then((markDownContent) => writeToFile(sample.filename, markDownContent));
