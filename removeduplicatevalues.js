function removeDuplicates(array) {
    
    let uniqueValues = {};

    for (let value of array) {
        uniqueValues[value] = true;
    }
    let uniqueArray = Object.keys(uniqueValues);

    uniqueArray = uniqueArray.map(Number);

    return uniqueArray;
}