const EventEmitter = require('events');

class Person extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.addListeners();
    }
    addListeners() {
        this.once('born', this.bornListener);
        this.on('speak', this.speakListener);
    };
    removeListeners() {
        this.removeListener('speak', this.speakListener);
    }
    bornListener() {
        console.log("Hello World");
    }
    speakListener(said) {
        console.log(`${this.name}: ${said}`);
    }
}

let ben = new Person('Benjamin Franklin');
let curtis = new Person('Curtis Dalton');

ben.emit(`born`);
ben.emit(`born`);
curtis.emit('born');

ben.emit('speak', "You may delay, but time will not.");
ben.removeListeners();
ben.emit('speak', 'hi');

curtis.emit('speak', 'Hi');