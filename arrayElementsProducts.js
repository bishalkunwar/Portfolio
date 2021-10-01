//method to multiply each numbers with each loop iterations nuber as base number using array methods.

const arrayInput = [1, 2, 3, 4, 5];
const outputHolder = [];
let product = 1;

const productsArray = () => {
    for (let i = 0; i < arrayInput.length; i++) {
        for (let j = 0; j < arrayInput.length; j++) {
            if (j != i) {
                product = product * arrayInput[j];
            }
        }
        outputHolder.push(product);
        product = 1; //re-initialize product for each next i iterations.
    }

    return outputHolder;
};

console.log(productsArray(arrayInput));