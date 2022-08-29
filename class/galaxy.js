const StellarObject = require('./stellar-object')
const Star = require('./star')

class Galaxy extends StellarObject {
    constructor(name, age, mass, type, stars) {
        super(name, age, mass);
        this.type = type;
        this.stars = [];
    }
}

module.exports = Galaxy
