//function to filter odd even numbers from an array.

function oddEvenFilter(numbers) {
    let oddNumbers = [];
    let evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenNumbers.push(numbers[i]);
        } else {
            oddNumbers.push(numbers[i]);
        }
    }

    // create an object to pass
    const returnOddEvens = {
        oddNumbers,
        evenNumbers,
    };

    return returnOddEvens;
}

console.log(oddEvenFilter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));