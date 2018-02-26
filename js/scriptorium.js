// Конструктори персонажів
function Character(speed, health, DPS, img, name){
    // this.name = name;
}
function Zombie(speed, health, DPS, img){
    this.speed = speed;
    this.health = health;
    this. DPS = DPS;
    this.img = img;
}
Zombie.prototype = Object.create(Character.prototype);
Zombie.prototype.constructor = Zombie;
function Hunter(speed, health, DPS, img){
    this.speed = speed;
    this.health = health;
    this. DPS = DPS;
    this.img = img;
}
Hunter.prototype = Object.create(Character.prototype);
Hunter.prototype.constructor = Zombie;
//звернення до об'єктів HTML
let container = document.querySelector('.container');
// Функції малювання персонажів на екрані
Character.prototype.draw  = function () {
    container.innerHTML += `<img src = ${this.img}>`;
}

// Hunter.prototype.draw  = function () {
//     container.innerHTML += `<img src = ${this.img}>`;
// }

// Character.prototype.sayHello = function () {
//     alert(`${this.name}, sais hallo, to vova`)
// };

// Характеристики персонажів
let zombieFrank = new Zombie(10, 100, 100, 'img/zombieFrank.gif');
let zombieJack = new Zombie(50, 50, 50, 'img/zombieJack.webp');
let hunter = new Hunter(20, 700, 35, 'img/hunter.gif');


// Виклик функцій котрі відмальовую створеного конструкторами перса
zombieFrank.draw();
zombieJack.draw();
hunter.draw();