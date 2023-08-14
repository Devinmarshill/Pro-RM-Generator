const fs = require('fs');
const markdownContent =(response)=> `# ${response.title}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

- What was your motivation?
- Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
- What problem does it solve?
- What did you learn?

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

## Usage

Provide instructions and examples for use. Include screenshots as needed.

To add a screenshot, create an assets folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README.

    

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third - party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

The last section of a high - quality README file is the license.This lets other developers know what they can and cannot do with your project.If you need help choosing a license, refer to[https://choosealicense.com/](https://choosealicense.com/).

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

Go the extra mile and write tests for your application.Then provide examples on how to run them here.
A GitHub profile with consistently high - quality README files is sure to help you`
const inquirer = require('inquirer');

inquirer
    .prompt(
        [
            {
                type: 'input',
                message:'what is your project title',
                name: 'title'
            },
        {
        type: 'input',
        message: 'What was your motivation?',
        name: 'motivation'

    },
    {
        type: 'input',
        message: 'Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")',
        name: 'why'
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problem'
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn'
    },
    {
        type: 'input',
        message: 'What makes your project stand out?',
        name: 'standOut'
    },
    {
        type:'rawlsit',
        message: 'Choose a License',
        name: 'license',
        choices:['Apache', 'boost', 'BSD', 'BSD-3Clause License', 'BSD2-Clause License']
    }
])

.then(response =>{
    console.log(response);
    console.log(response.motivation);
    console.log(response.why);
    console.log(response.problem);
    console.log(response.learn);
    console.log(response.standOut);
    console.log(response.license);


    fs.writeFile('README.md', markdownContent(response), err =>{
        if (err){
            console.log("error creating README", err);
        } else { 
            console.log('README has been generated successfully!');
        }
        }
    );
});

