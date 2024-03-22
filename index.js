const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Shape } = require('./lib/shapes.js');

let promptFail = false;

if (promptFail) {
    start();
}

start();

async function start() {
    const data = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to 3 characters for your logo.',
            validate: function (input) {
                if (input.length > 3) {
                    console.log('Enter no more than 3 characters for your logo!');
                    promptFail = true;
                    return false;
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text in your logo (use Hex ID or pick a color name.',
            default: 'white'
        },

        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape from the following options:',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter a color for the shape (hex code or valid color name)...',
            default: 'gray'
        },
    ]);


    const folderPath = 'Logos';
    const baseFileName = 'logo';
    let fileName;

    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
        fileName = 'logo.svg';
    } else {
        let counter = 2;
        while (fs.existsSync(path.join(folderPath, `${baseFileName}${counter}.svg`))) {
            counter++;
        }
        fileName = `${baseFileName}${counter}.svg`;
    }

    const filePath = path.join(folderPath, fileName);

    const shape = new Shape(data.shape);
    shape.createColor(data.shapeColor);
    shape.createTextColor(data.textColor);
    shape.createText(data.text);

    const userData = `${shape.render()}`;

    fs.writeFile(filePath, userData, (err) => {
        if (err) {
            console.error(`Error: ${err}`);
        } else {
            console.log(`Your new ${fileName} has been created.`);
        }
    });
}
