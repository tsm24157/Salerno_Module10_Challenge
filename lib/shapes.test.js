// imports the shape class
const { Shape } = require('../lib/shapes.js')

// tests the functionality of the code
describe('Shape', () => {
    test('Properly sets shape color', () => {
        const triangle = new Shape('Triangle', 'polygon points="150, 18 244, 182 56, 182"');
        triangle.createColor('blue');
        expect(triangle.color).toEqual('blue');
    });

    test('Creates the image correctly', () => {
        const square = new Shape('Square', 'rect x="60" y="22" width="180" height="200"');
        square.createColor('green');
        expect(square.render()).toEqual('<svg width="300" height="200"> <rect x="60" y="22" width="180" height="200" fill="green" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill=""></text></svg>');
    });

    test('Returns the text properly', () => {
        const circle = new Shape('Circle', 'Circle cx="150" cy="100" r="80"');

        circle.createColor('green');
        circle.createTextColor('yellow');
        circle.createText('mts');
        expect(circle.render()).toEqual('<svg width="300" height="200"> <Circle cx="150" cy="100" r="80" fill="green" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="yellow">mts</text></svg>');
    });
})
