// Runs the application using imports from lib/
const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('/lib/shapes.js')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter the title of your project:',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter Installation requirements:',
      name: 'install',
    },
  ])
//   .then((response) => {
   
//     fs.writeFile('svg',JSON.stringify(response, null, '\t'), (err) => {
//       if(err) {
//         console.log('There was an error: ' + err);
//       } else {
    

//       }
//     })
//   });
