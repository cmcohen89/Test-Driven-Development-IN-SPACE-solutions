class Spaceship {
    constructor(shipName, country, astronaut, lightspeedCapability) {
        this.shipName = shipName;
        this.country = country;
        this.astronaut = null;
        this.lightspeedCapability = false;
    }

    detectAlienTechnology() {
        if (this.astronaut.nationality === 'Moonman') {
            this.lightspeedCapability = true;
            return `${this.shipName} has detected alien technology on the dark side of the moon!`
        }
    }
}

module.exports = Spaceship;
