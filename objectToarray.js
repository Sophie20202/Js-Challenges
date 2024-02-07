function objectToArray(obj) {
    const keyValuePairs = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keyValuePairs.push([key, obj[key]]);
        }
    }
    return keyValuePairs;
}