const fs = require('fs');
const markdownContent = (response) => `# ${response.title}

## Description

${response.description}

## Table of Contents (Optional)

${response.contents}

- [Installation](#installation)
- [Credits]($credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation

${response.installation}

    

## Credits

${response.contributing}

## License

${response.license}
[https://choosealicense.com/](https://choosealicense.com/).

---

🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document.You might also want to consider adding the following sections.

## Badges

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

    Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing.Check out the badges hosted by[shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

## Features

If your project has a lot of features, list them here.

## How to Contribute

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.The[Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

## Tests

${response.tests}

${response.questions}`

const inquirer = require('inquirer');

inquirer
    .prompt(
        [
            {
                type: 'input',
                message: 'What is your Project Title',
                name: 'title'
            },
            {
                type: 'input',
                message: 'Give a brief description of your Project',
                name: 'description'

            },
            {
                type: 'input',
                message: 'Table of Contents',
                name: 'contents'
            },
            {
                type: 'input',
                message: 'Explain how a user can install your Project',
                name: 'installation'
            },
            {
                type: 'input',
                message: 'Explain how a user can use your Project',
                name: 'usage'
            },
            {
                type: 'input',
                message: 'name any sources you used to build this Project',
                name: 'contributing'
            },
            {
                type: 'rawlist',
                message: 'Choose a License',
                name: 'license',
                choices: ['Apache', 'boost', 'BSD', 'BSD-3Clause License', 'BSD2-Clause License', 'MIT']
            },
            {
                type: 'input',
                message: 'Write tests that your user can do to understand the Project you have created',
                name: 'tests'
            },
            {
                type: 'input',
                message: 'Questions/Contact Me',
                name: 'questions'
            }
        ])

    .then(response => {
        console.log(response);
        console.log(response.description);
        console.log(response.contents);
        console.log(response.installation);
        console.log(response.usage);
        console.log(response.contributing);
        console.log(response.license);
        console.log(response.tests);
        console.log(response.questions);


        fs.writeFile('README.md', markdownContent(response), err => {
            if (err) {
                console.log("error creating README", err);
            } else {
                console.log('README has been generated successfully!');
            }
        }
        );
    });

