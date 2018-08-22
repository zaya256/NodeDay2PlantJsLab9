const EventEmitter = require('events');

class Plant extends EventEmitter {

    constructor() {
        super();
        this.size = 0;
        this.hasBeenPlanted = false;
        this.addEventListeners();
    }

    addEventListeners() {
        this.once('plantSeed', this.plantSeedListener);
        this.on('water', this.waterListener);
        this.on('bugAttack', this.bugAttackListener);
        this.on('harvest', this.harvestListener);
        this.on('error', this.errorListener)


    }

    plantSeedListener() {
        this.size = 1;
        this.hasBeenPlanted = true;
        console.log(`seed is planted`);

    }

    waterListener() {
        if (this.hasBeenPlanted) {
            this.size++;
            console.log(`It has been watered on. The size is now ${this.size}`)
        } else {
            console.log('there is error');
        }

    }

    bugAttackListener() {
        if (this.hasBeenPlanted) {
            this.size--;
            console.log(`Plant has been attacked by. The size is now: ${this.size}`);
        } else {
            console.log('There is error');
        }
    }

    harvestListener() {
        if (this.hasBeenPlanted) {
            console.log(`The plant is size ${this.size}`);
            this.removeListener('bugAttack', this.bugAttackListener);
            this.removeListener('water', this.waterListener);
        }
        else {
            console.log('There is error')
        }
    }

    errorListener(err) {
        console.log(`Therer is error`);
    }


}


let myPlant = new Plant;
myPlant.emit('harvest');
myPlant.emit('bugAttack');
myPlant.emit('plantSeed');
myPlant.emit('water');
myPlant.emit('bugAttack');
myPlant.emit('error', new Error('whoops!'));
myPlant.emit('water');
myPlant.emit('water');
myPlant.emit('water');
myPlant.emit('plantSeed');
myPlant.emit('harvest');
myPlant.emit('water');
myPlant.emit('bugAttack');
myPlant.emit('bugAttack');