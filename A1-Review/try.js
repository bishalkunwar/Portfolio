// task 3 function to filter out the odd and even numbers from given array
function filterOddandEven(arr) {
    let even_number = [];
    let odd_number = [];
    for (const element of arr) {
        if (element % 2 == 0) {
            even_number.push(element);
        } else {
            odd_number.push(element);
        }
    }
    console.log(`Array of even number ${even_number}`);
    console.log(`Array of odd number ${odd_number}`);
}

filterOddandEven([1, 2, 3, 4, 5, 6, 7, 8, 9]);
filterOddandEven([2, 4, 6, 8, 4, 7]);