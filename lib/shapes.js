// Exports `Triangle`, `Circle`, and `Square` classes

// Triangle
class Triangle {
    constructor(textColor, shapeColor, text) {
      this.textColor = textColor;
      this.shapeColor = shapeColor;
      this.text = text;
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <polygon points="0 20, 100 20, 100 0, 0 100 " fill="${this.shapeColor}"/>
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`
    }
  };
// Circle
class Circle {
    constructor(textColor, shapeColor, text) {
      this.textColor = textColor;
      this.shapeColor = shapeColor;
      this.text = text;
    }
  
    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`
    }
  };
// Square
class Square {
    constructor(textColor, shapeColor, text) {
      this.textColor = textColor;
      this.shapeColor = shapeColor;
      this.text = text;
    }
  
    render() {
      return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">

      <rect width="300" height="300" fill="${this.shapeColor}" />

      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`
    }
  };

  module.exports = {Square, Triangle, Circle};