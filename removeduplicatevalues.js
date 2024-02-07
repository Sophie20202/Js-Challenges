function removeDuplicates(array) {
    let uniqueArray = [];
    for (let value of array) {
        if (!uniqueArray.includes(value)) {
            uniqueArray.push(value);
        }
    }
    return uniqueArray;
}