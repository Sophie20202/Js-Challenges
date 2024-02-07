function shareKeyValue(obj1, obj2) {
    for (let key1 in obj1) {
        for (let key2 in obj2) {
            if (key1 === key2 && obj1[key1] === obj2[key2]) {
                return true;
            }
        }
    }
    return false;
}