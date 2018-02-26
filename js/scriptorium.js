//Характеристики ігрового поля
let feildHeight = 100;
let feildWidth = 500;

//Character characteristics
let bottomPosition = 10;
let characterHeight = 100;
let leftPosition= feildWidth / 2 - characterHeight/2;
// Character selection
let listOfCharacters = ["Pirate", "Bob", "bigSword"];


// Конструктори персонажів
function Character(speed, health, DPS, img, name){
    // this.name = name;
}
function Pirate(speed, health, DPS, img, height, bottom, left){
    this.speed = speed;
    this.health = health;
    this. DPS = DPS;
    this.img = img;
    this.height = height;
    this.bottom = bottom;
    this.left = left;
}
Pirate.prototype = Object.create(Character.prototype);
Pirate.prototype.constructor = Pirate;
function Bob(speed, health, DPS, img, height, bottom, left){
    this.speed = speed;
    this.health = health;
    this. DPS = DPS;
    this.img = img;
    this.height = height;
    this.bottom = bottom;
    this.left = left;
}
Bob.prototype = Object.create(Character.prototype);
Bob.prototype.constructor = Bob;

function Sword(speed, health, DPS, img, height, bottom, left){
    this.speed = speed;
    this.health = health;
    this. DPS = DPS;
    this.img = img;
    this.height = height;
    this.bottom = bottom;
    this.left = left;
}
Sword.prototype = Object.create(Character.prototype);
Sword.prototype.constructor = Sword;

//звернення до об'єктів HTML
let container = document.querySelector('#battlefield');
// Функції малювання персонажів на екрані
Character.prototype.draw  = function () {
    container.innerHTML += `<img style="height: ${this.height}px; bottom: ${this.bottom}px; left: ${this.left}px;" src = ${this.img}>`;
};

// Hunter.prototype.draw  = function () {
//     container.innerHTML += `<img src = ${this.img}>`;
// }

Character.prototype.sayHello = function () {
    alert(`${this.name}, sais hallo, to vova`)
};


// Характеристики персонажів, гіфи
let drawPirate = new Pirate(10, 100, 100, 'img/pirate.gif', characterHeight, bottomPosition, leftPosition);
let drawBob = new Bob(50, 50, 50, 'img/bob.gif', characterHeight, bottomPosition, leftPosition);
let drawbigSword = new Sword(20, 700, 35, 'img/bigSword.gif', characterHeight, bottomPosition, leftPosition);


// Виклик функцій котрі відмальовують створеного конструкторами перса, малюэмо рандомного персонажа
function chooseCharacter(item) {
    let ourCharacter = listOfCharacters[Math.floor(Math.random()*item.length)];
    console.log(ourCharacter);
    if (ourCharacter === "Pirate") {
        drawPirate.draw();
    } else if (ourCharacter === "Bob"){
        drawBob.draw();
    } else {
        drawbigSword.draw();
    }
}
chooseCharacter(listOfCharacters);
//конструктор блоків
function Block(width, height, positionX, positionY) {
    this.width = width;
    this.height = height;
    this.positionX = positionX;
    this.positionY = positionY;

}