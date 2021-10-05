//method to multiply each numbers with each loop iterations nuber as base number using array methods.

const arrayInput = [1, 2, 3, 4, 5];

const productsArray = (array) => {
    const array1 = array.reduce((acc, curr) => {
        return acc * curr;
    }, 1);

    const arrayOutput = arrayInput.map((element) => {
        return array1 / element
    });

    return arrayOutput;
};

console.log(productsArray(arrayInput));