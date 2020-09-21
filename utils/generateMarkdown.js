// function to generate markdown for README
function generateMarkdown(data) {

    console.log(data);

    var markDownContent =
`![License: ${data.license.name}](${data.license.badge})

# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Description](##Description)
2. [Installation](##Installation)
3. [Usage](##Usage)
4. [License](##License)
5. [Contributing](##Contributing)
6. [Tests](##Tests)
7. [Questions](##Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
${data.questioning}

https://github.com/${data.username}

Email: ${data.email}`;

    return markDownContent;
  }
  
module.exports = generateMarkdown;