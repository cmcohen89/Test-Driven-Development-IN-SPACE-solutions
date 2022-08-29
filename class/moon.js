const StellarObject = require('./stellar-object')

class Moon extends StellarObject {
    constructor(name, age, mass, planet, colonizationStatus) {
        super(name, age, mass);
        this.planet = planet;
        this.planet.moons.push(this)
        this.colonizationStatus = false;
    }

    static flagsPlanted = [];
}

module.exports = Moon;
