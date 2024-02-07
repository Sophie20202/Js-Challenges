function Prime(number){
    let num = parseInt(prompt("Enter a number to calculate its factorial:"))
    if (num < 2) {
        alert(number + " is not a prime number.");
        return false;
    }
    for (let i = 2; i <= number; i++) {
        if (num % i === 0) {
            alert(number + " is not a prime number.");
            return false;
        }
    }

    alert(number + " is a prime number.");
    return true;
}
