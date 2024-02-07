function factorial(number) {
    
    if (number === 0 || number === 1) {
        alert("The factorial of " + number + " is 1.");
        return 1;
    } else {
       
        let result = number * factorial(number - 1);
        alert("The factorial of " + number + " is " + result + ".");
        return result;
    }
}