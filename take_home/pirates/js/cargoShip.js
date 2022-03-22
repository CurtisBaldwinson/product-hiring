const {randomCargo, randomMoney, randomCoordinates} = require('./utils')

class CargoShip {
    constructor(initialX, initialY) {
        this.x = initialX;
        this.y = initialY;
        this.cargo = randomCargo();
        this.money = randomMoney();
    }

    moveNorth() {
        this.y -= 1;
    }

    moveSouth() {
        this.y += 1;
    }

    moveWest() {
        this.x -= 1;
    }

    moveEast() {
        this.x += 1;
    }
}

module.exports = CargoShip;
