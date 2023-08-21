// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none') {
    return '';
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none') {
    return '';
  } else {
    return `(https://opensource.org/licenses/${license}))`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none') {
    return '';
  } else {
    return `Your license is covered under the ${renderLicenseLink(license)} license.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description:

${data.description}

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Contact](#contact)
- [License](#license)

${data.tableOfContents}

## Installation:

${data.installation}

## Usage:

${data.usage}

## Contribution:

${data.contribution}

## Tests:

${data.tests}

## Contact:

${data.email}
${data.github}

## License:



${renderLicenseSection(data.license)}



`;
}

module.exports = generateMarkdown;
