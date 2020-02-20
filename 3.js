//定義一個類別
class Car {
    constructor(color) {
        this.color = color;
    }
    run() {}
}

//追蹤原型鍊
//產生類別物件
let car = new Car('green');

//取得並將原型物件顯示出來
let carProto = Object.getPrototypeOf(car);
console.log(carProto);

let objProto = Object.getPrototypeOf(carProto);
console.log(objProto);

let lastOne = Object.getPrototypeOf(objProto);
console.log(lastOne);
