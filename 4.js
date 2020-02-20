class Car {
    constructor(color) {
        this.color = color;
    }

    run() {
        console.log('Car ' + this.color + ' Running');
    }

    static showColors() {
        //定義一個靜態方法
        console.log('We support three colors: blue, red, green.');
    }
}

//直接使用類別名稱，呼叫靜態方法
Car.showColors();
// Car.run(); //錯誤，run 非靜態方法，必須由物件實體呼叫

let carObj = new Car('blue');
carObj.run(); //使用物件實體，呼叫物件的方法 run();
carObj.showColors();
//錯誤，showColors 為靜態方法，必須由類別名稱呼叫
