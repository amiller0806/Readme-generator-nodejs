// TODO: Include packages needed for this application
const inquire = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('File written successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then(function(answers) {
        // TODO: Create a function to write README file
        writeToFile('README.md', answers);
        
    });
}
// fill in blanks first, then do 1-4 if you need more info , really so for other challenges you can 
//  https://courses.bootcampspot.com/courses/1991/pages/9-dot-1-1-introduction?module_item_id=702061



// TODO: Go over 1-4 in module so you can see where the 
// TODO: generateMarkdown stuff is retrieved from/really for understanding 

// Function call to initialize app
init();

// https://www.npmjs.com/package/inquirer#methods 
// app.js in 9.5, 9.3.6
// https://courses.bootcampspot.com/courses/1991/pages/9-dot-3-6-validate-answers?module_item_id=702123
//TODO: GENERATE  Description, Email, Github, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions