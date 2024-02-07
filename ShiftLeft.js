function shiftLeft(arr) {
    if (arr.length <= 1) {
        return arr; // No need to shift if array has 0 or 1 element
    }
    
    const firstElement = arr.shift(); // Remove the first element and store it
    arr.push(firstElement); // Push the removed element to the end of the array
    return arr;
}