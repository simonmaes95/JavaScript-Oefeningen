class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak() {
        console.log(`I am a ${this.type} rabbit.`);
    }
}

const killerRabbit = new Rabbit("killer");
killerRabbit.speak(); // Output: I am a killer rabbit.