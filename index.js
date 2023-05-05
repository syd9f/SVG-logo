// Runs the application using imports from lib/
const inquirer = require('inquirer');
const fs = require('fs');
const { Square } = require('./lib/shapes');
const { Triangle} = require('./lib/shapes');
const { Circle } = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'list',
      message: 'Select a Shape',
      name: 'shape',
      choices: ['Triangle', 'Circle', 'Square']
    },
    {
      type: 'input',
      message: 'Select a Color for the shape',
      name: 'shapeColor',
    },
    {
      type: 'input',
      message: 'Enter text for logo',
      name: 'text',
    },
    {
      type: 'input',
      message: 'Select a color for the text',
      name: 'textColor',
    },
  ])
  .then((response) => {
    let shape;
   if (response.shape === 'Square'){
    shape = new Square(response.textColor, response.shapeColor, response.text)
   }
   if (response.shape === 'Triangle'){
    shape = new Triangle(response.textColor, response.shapeColor, response.text)
   }
   if (response.shape === 'Circle'){
    shape = new Circle(response.textColor, response.shapeColor, response.text)
   }

    fs.writeFile('shape.svg', shape.render(), (err) => {
      if(err) {
        console.log('There was an error: ' + err);
      } else {
    
      }
    })
  });
