class Car {
    constructor(color) {
        this.color = color;
        this.speed = 0;
        console.log('建構式被呼叫');
    }

    run(speed) {
        this.speed = speed;
        console.log('Car ' + this.color + ' Running at ' + this.speed + ' Km/hr');
    }
    stop() {
        this.speed = 0;
        console.log('Car ' + this.color + ' Stopped');
    }
}

let car1 = new Car('blue');
let car2 = new Car('pink');
car1.run(120);
car1.stop();
console.log('-----');
car2.run(90);
car2.stop();
