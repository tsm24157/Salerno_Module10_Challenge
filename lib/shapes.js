class Shape {
    constructor(name, coordinates, color, textColor, text) {
        this.name = name;
        this.coordinates = coordinates;
        this.color = '';
        this.textColor = '';
        this.text = '';
    }

    createColor(color) {
        this.color = color;
    }
    
    createTextColor(textColor) {
        this.textColor = textColor;
    }
    createText(text) {
        this.text = text;
    }

    render() {
        let coordinates;
        switch (this.name) {
            case 'Circle':
                coordinates = 'Circle cx="150" cy="100" r="80"';
                break;
            case 'Triangle':
                coordinates = 'polygon points="150, 18 244, 182 56, 182"';
                break;
            case 'Square':
                coordinates = 'rect x="60" y="22" width="180" height="200"';
                break;
        }
        return `<svg width="300" height="200"> <${coordinates} fill="${this.color}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
}

module.exports = { Shape };