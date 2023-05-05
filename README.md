# SVG-logo
Module 10: OOP - Object-Oriented Programming

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
## Installation
Requires Node.js, Inquirer, and Jest

## Usage
This is a Command Line Application. When the user opens the terminal and types, 'node index.js', a series of prompts will have the user select a shape, input text, and choose colors for the shape and text. Once all of the prompts have been answered, a shape.svg file is generated with the user input.

![Gif](./images/SVG-Logo.gif)

[Link to Video](https://drive.google.com/file/d/1ybjDQyGsAOqtsjrI3PWHKXtyDWtUWUlP/view)

## Credits
Worked on with Tutor: Eric Sayer

https://www.w3schools.com/graphics/svg_intro.asp
