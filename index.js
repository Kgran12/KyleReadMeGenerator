const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateReadMe = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',


    },
    {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description',

    },
    {
        type: 'input',
        message: 'Describe your project installation instructions.',
        name: 'installation',

    },
    {
        type: 'input',
        message: 'Describe your project usage information.',
        name: 'usage',

    },
    {
        type: 'input',
        message: 'Describe your project contribution guidelines.',
        name: 'contribution',

    },
    {
        type: 'input',
        message: 'Describe your project test instructions.',
        name: 'tests',

    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',

    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: function (email) {
            // Regex mail check (return true if valid mail)
            return /\S+@\S+\.\S+/.test(email);
        }
        },

    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'BSD'],
    },

    

];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        const readMe = generateReadMe(response);
        console.log(readMe)
        fs.writeFile('README.md', readMe, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
}

// Function call to initialize app
init();

