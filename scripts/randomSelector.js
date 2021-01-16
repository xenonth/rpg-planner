//randomiser function

const randomiser = (array) => {
    let randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber]
}

module.exports = randomiser;