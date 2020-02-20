// 定義一個類別
class Car {
    // 車子的建構式
    constructor(color) {
        this.color = color;
        console.log('執行父類別建構式，建立基本的 Car 物件');
    }
    run() {
        console.log('Car ' + this.color + ' is Running');
    }
}

// 定義子類別
class ElectricCar extends Car {
    // 電動車的建構式
    constructor(color) {
        super(color); //呼叫父類別的建構式
        this.battery = 100; //衛伸更多子類別、電動車專屬的定義
        console.log('繼續執行子類別建構式，衍生出 ElectricCar 物件');
    }
    run(distance) {
        this.battery -= distance;
        console.log('Car ' + this.color + ' Runs ' + distance + ' Km');
    }

    charge() {
        this.battery = 100;
    }
}

//  產生子類別物件
// eslint-disable-next-line no-unused-vars
let car = new ElectricCar('green');
car.run(30);
car.charge();
console.log('車子顏色是 ' + car.color); //子類別物件同樣擁有父類別中定義的「屬性」
console.log('目前的電量：' + car.battery); //使用子類別中定義的「屬性」
