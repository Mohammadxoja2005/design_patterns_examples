class Car {
    public engine: string;
    public wheels: number;
    public color: string;

    constructor() {
        this.engine = '';
        this.wheels = 0;
        this.color = '';
    }

    displaySpecs() {
        console.log(`Engine: ${this.engine}, Wheels: ${this.wheels}, Color: ${this.color}`);
    }
}

interface CarBuilder {
    setEngine(): void;

    setWheels(): void;

    setColor(): void;

    build(): void;
}

class CarBuilderImpl implements CarBuilder {
    private readonly car: Car;

    constructor() {
        this.car = new Car();
    }

    setEngine() {
        this.car.engine = 'V8';

        return this;
    }

    setColor() {
        this.car.color = "red";

        return this;
    }

    setWheels() {
        this.car.wheels = 4;

        return this;
    }

    build() {
        return this.car;
    }
}

const carBuilder = new CarBuilderImpl();

const car = carBuilder.setEngine().setWheels().setColor();