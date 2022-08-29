const StellarObject = require('./stellar-object');
const Planet = require('./planet');

class Star extends StellarObject {
    constructor(name, age, mass, galaxy, planets) {
        super(name, age, mass);
        this.galaxy = galaxy;
        this.galaxy.stars.push(this);
        this.planets = [];
    }

    addPlanet(planet) {
        if (planet instanceof Planet) {
            this.planets.push(planet);
            planet.star = this;
        } else {
            throw new Error('Must be a planet');
        }
    }

    printPlanets() {
        if (this.planets.length) {
            let planetNames = []
            for (let planet of this.planets) {
                planetNames.push(planet.name)
            }
            return `The planets orbiting ${this.name} are ${planetNames.join(' and ')}`;
        } else {
            return 'I am a lonely star without any planets!'
        }
    }
}

module.exports = Star;
