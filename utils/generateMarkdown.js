const fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {

  return new Promise(function (resolve, reject) {
    var licenseContents = "";

    fs.readFile(`./utils/licenses/${data.license.name}.txt`, "utf-8", (err, licenseData) => {
      if (err) {
        return reject(err);
      }
      licenseContents = licenseData;
      var currentDate = new Date();
      licenseContents = licenseContents.replace("[yyyy]", currentDate.getFullYear());
      licenseContents = licenseContents.replace("[Copyright_Owner]", data.devname);

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
${licenseContents}

## Contributing
${data.contribution}

## Tests
${data.tests}

## Questions
${data.questioning}

https://github.com/${data.username}

Email: ${data.email}`;
      resolve(markDownContent);
    });
  });
}

module.exports = generateMarkdown;