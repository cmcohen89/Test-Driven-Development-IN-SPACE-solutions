const StellarObject = require('./stellar-object')
const Spaceship = require('./spaceship')
const Astronaut = require('./astronaut')

class Planet extends StellarObject {
    constructor(name, age, mass, habitability, star, moons, astronauts) {
        super(name, age, mass);
        this.habitability = habitability;
        this.moons = [];
        if (this.habitability === true) {
            this.astronauts = [];
        }
    }

    recruitAstronaut(name, age, nationality, expertise) {
        let astronaut = new Astronaut(name, age, nationality, expertise)
        this.astronauts.push(astronaut);
        Astronaut.astronautLogs[astronaut.name] = astronaut.nationality;
        return astronaut;
    }

    buildSpaceship(astronaut, shipName, country) {
        let ship = new Spaceship(shipName, country);
        if (this.astronauts.includes(astronaut)) {
            astronaut.spaceship = ship;
            ship.astronaut = astronaut;
            return ship;
        } else {
            throw new Error('Cannot build spaceship for unauthorized astronaut')
        }
    }
}

module.exports = Planet;
