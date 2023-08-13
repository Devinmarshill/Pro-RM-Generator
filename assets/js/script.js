const inquirer = require('inquirer');

inquirer
    .prompt(
        [
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
        name: 'stand out'
    }
])

.then(response =>{
    console.log(response);
    console.log(response.motivation);
    console.log(response.why);
    console.log(response.problem);
    console.log(response.learn);
    console.log(response.standOut);

});