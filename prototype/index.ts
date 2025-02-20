interface Clonable {
    clone(): this;
}

class DeepUser implements Clonable {
    private readonly name: string;
    private readonly age: string;
    private readonly skills: string[];

    constructor(name, age, skills) {
        this.name = name;
        this.age = age;
        this.skills = skills;
    }

    public clone() {
        return new DeepUser(this.name, this.age, this.skills);
    }
}

const originalUser = new DeepUser("John", "30", ["JS", "TS", "React"]);
const copiedUser = originalUser.clone();

console.log(originalUser === copiedUser); // false