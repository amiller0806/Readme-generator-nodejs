function renderLicenseLink() {
  return `[For Further Information]( https://shields.io/category/license)`
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

  ## Table of Contents

  * [Description](#description)

  * [License](#license)

  * [Installation](#installation)

  * [Contribution](#contribution)

  * [Usage](#usage)

  * [Tests](#tests)

  * [Github](#github)

  * [Email](#email)


  ### Description 
  ${data.description}

  ### License 
  ![GitHub license](https://img.shields.io/badge/license-${data.license}-turquoise.svg)
${renderLicenseLink()}

  ### Installation
  ${data.installation}

  ### Contribution
  ${data.contributors}

  ### Usage
  ${data.usage}

  ### Tests
  ${data.tests}

  ### Github
[Github Profile](https://github.com/${data.github})

  ### Email
${data.email}


`;

}

module.exports = generateMarkdown;
