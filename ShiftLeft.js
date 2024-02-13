function shiftArrayLeft(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let firstElement = arr.shift();
    
    arr.push(firstElement);
    
    return arr;
}