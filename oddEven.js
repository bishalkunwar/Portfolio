//Function to check if the given number is odd or even.

function oddEvenCheck(number) {
    let result = number % 2;
    if (result == 0) {
        console.log(number + " is even number");
    } else if (result != 0) {
        console.log(number + " is odd number");
    } else {
        console.log("Sorry, invalid input");
    }
}

oddEvenCheck(213);