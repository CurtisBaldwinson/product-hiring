function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

exports.randomMoney = () => getRandomInt(100, 5000)

exports.randomCargo = () => getRandomInt(1, 5)