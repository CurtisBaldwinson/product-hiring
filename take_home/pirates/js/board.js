const PirateShip = require('./pirateShip')
const CargoShip = require('./cargoShip')
const Island = require('./island')

class Board {

    constructor(gameBoardLength, numIslands, numCargoShips) {
        this.gameBoardLength = gameBoardLength;
        this.numIslands = numIslands;
        this.numCargoShips = numCargoShips;
        this.pirate = new PirateShip(this.getRandomBoardScalar(), this.getRandomBoardScalar());
        this.islands = []
        this.cargoShips = []
        this.board = [...Array(gameBoardLength)].map(x => Array(gameBoardLength).fill('^'));
        this.initBoard()
    }

    initBoard() {
        console.log("TESTING TESTING");
        for (let i = 0; i < this.numIslands; i++) {
            let {x, y} = this.getRandomCoordinates();
            this.islands.push(new Island(x, y));
        }
        for (let i = 0; i < this.numCargoShips; i++) {
            let {x, y} = this.getRandomCoordinates();
            this.cargoShips.push(new CargoShip(x, y));
        }
    }

    getRandomCoordinates() {
        let x = 0;
        let y = 0;
        do {
            x = this.getRandomBoardScalar();
            y = this.getRandomBoardScalar();
        } while (this.board[x][y] !== '^');

        return {x, y};
    }

    getRandomBoardScalar() {
        return Math.floor(Math.random() * this.gameBoardLength);
    }

    display() {
        for (let cargo of this.cargoShips) {
            this.board[cargo.x][cargo.y] = 'C';
            console.log("cargo", cargo.x, cargo.y);
        }
        for (let island of this.islands) {
            this.board[island.x][island.y] = 'I';
            console.log("island", island.x, island.y);
        }
        this.board[this.pirate.x][this.pirate.y] = 'P';
        for (let x = 0; x < this.gameBoardLength; x++) {
            let row = '';
            for (let y = 0; y < this.gameBoardLength; y++) {
                row += this.board[x][y];
            }
            console.log(row);
        }
    }

    getCollision() {
        for (let cargo of this.cargoShips) {
            if (cargo.x === this.pirate.x && cargo.y === this.pirate.y) {
                return cargo;
            }
        }
        for (let island of this.islands) {
            if (island.x === this.pirate.x && island.y === this.pirate.y) {
                return island;
            }
        }
        return null;
    }

    moveNorth() {
        this.board[this.pirate.x][this.pirate.y] = '^';
        this.pirate.moveNorth();
    }

    moveSouth() {
        this.board[this.pirate.x][this.pirate.y] = '^';
        this.pirate.moveSouth();
    }

    moveWest() {
        this.board[this.pirate.x][this.pirate.y] = '^';
        this.pirate.moveWest();
    }

    moveEast() {
        this.board[this.pirate.x][this.pirate.y] = '^';
        this.pirate.moveEast();
    }
}

module.exports = Board;
