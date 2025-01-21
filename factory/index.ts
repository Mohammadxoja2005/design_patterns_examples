// Creational Design Pattern

interface Processing {
    authenticate(): void;
}

class MasterCard implements Processing {
    authenticate() {
        console.log("MasterCard authenticate");
    }
}

class Visa implements Processing {
    authenticate() {
        console.log("Visa authenticate");
    }
}

class ProcessinFactory {
    static createProcessing(type: string): Processing {
        if (type === "MasterCard") {
            return new MasterCard();
        } else if (type === "Visa") {
            return new Visa();
        }
    }
}

// using code somewhere else
const masterCard = ProcessinFactory.createProcessing("MasterCard");

// using code somewhere else
const visa = ProcessinFactory.createProcessing("Visa");

