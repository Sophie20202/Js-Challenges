function Prime(number) {
    if (number < 2) {
        alert(number + " is not a prime number.");
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            alert(number + " is not a prime number.");
            return false;
        }
    }

    alert(number + " is a prime number.");
    return true;
}
