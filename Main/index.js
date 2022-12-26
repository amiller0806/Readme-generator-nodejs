// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project.', 
    },
{ type: 'input',
name: 'installation',
message: 'What are the installation instructions for your project?',
},

{ type: 'input',
name: 'usage',
message: 'What is the usage of your project?',
},


{ type: 'list',
name: 'license',
choices:['MIT','ISC','GPL','BSD','APACHE','APACHE-2.0','lgpl_2_1', 'none'],
message: 'What is the license you are using for your project?',
},


{ type: 'input',
name: 'tests',
message: 'What tests need to be run for your project to initialize?',
},

{ type: 'input',
name: 'github',
message: 'What is your Github username?',
},

{ type: 'input',
name: 'email',
message: 'What is your email?',
},

{ type: 'input',
name: 'contributors',
message: 'What is your name?',
}

];

// Writes README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('File written successfully!');
        }
    });
}

// Initializes app
function init() {
    inquirer.prompt(questions).then(function(answers) {
    
            
        writeToFile('README.md', answers);
        
    });
}


// Function call to initialize app
init();

