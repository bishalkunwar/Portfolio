// Generate sum of fibonacci series from user input number.

function fibonacciSeries() {
    let num1 = 0,
        num2 = 1,
        i;
    let number = prompt('Enter any natural number ', " ");

    if (number < 1)
        return;
    console.log("The fibonacci series are:\n")
    console.log(num1 + " ");
    for (i = 1; i < number; i++) {
        console.log(num2 + " ");
        let next = num1 + num2;
        num1 = num2;
        num2 = next;
    }
}

fibonacciSeries();