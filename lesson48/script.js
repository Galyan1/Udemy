'use strict';

//синтаксический сахар

class Rectangle {
    constructor(height, width){
        this.width = width;
        this.height = height;
    }

    calcArea(){
        return this.width * this.height;
    }
}

const square = new Rectangle(15, 20),
      long = new Rectangle(30, 5);

//console.log(square.calcArea(), long.calcArea());

//абстракция - отделяем концепцию от ее экземпляра; наслнедование - одно базируется на другом

class ColoredRectangleWithText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(width, height);
        this.text = text;
        this.bgColor = bgColor;
    }
    showMyProps(){
        console.log(`text: ${this.text}, color: ${this.bgColor}`);
    }
}

const figura = new ColoredRectangleWithText(10, 15, 'kekus', 'red');

figura.showMyProps();
console.log(figura.calcArea());



